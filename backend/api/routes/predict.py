from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any
import pandas as pd
import numpy as np

from ..core.ml_loader import ml_loader
from ..core.preprocessing import process_csv_file

router = APIRouter()

class PredictionResult(BaseModel):
    index: int
    prediction: str
    prediction_code: int
    prob_false_positive: float
    prob_candidate: float
    prob_confirmed: float
    max_confidence: float

class PredictionResponse(BaseModel):
    success: bool
    mission: str
    total_objects: int
    statistics: Dict[str, int]
    predictions: List[PredictionResult]
    top_exoplanets: List[PredictionResult]

@router.post("/predict/{mission}", response_model=PredictionResponse)
async def predict_exoplanets(
    mission: str,
    file: UploadFile = File(...)
):
    """
    Predict exoplanets from CSV
    
    Args:
        mission: "kepler", "tess", or "k2"
        file: CSV file
    """
    
    # Validate mission
    if mission not in ["kepler", "tess", "k2"]:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid mission. Use: kepler, tess, or k2"
        )
    
    try:
        # Read file
        contents = await file.read()
        
        # Process CSV
        df = await process_csv_file(contents)
        
        # Get model
        model, scaler, features = ml_loader.get_model(mission)
        
        if model is None:
            raise HTTPException(
                status_code=500,
                detail=f"Model for {mission} not available"
            )
        
        # Prepare data
        numeric_cols = df.select_dtypes(include=['number']).columns.tolist()
        X = df[numeric_cols].copy()
        
        # Remove target_label if it exists
        if 'target_label' in X.columns:
            X = X.drop(columns=['target_label'])
        
        # Align features
        X_model = pd.DataFrame(0, index=X.index, columns=features)
        for col in X.columns:
            if col in X_model.columns:
                X_model[col] = X[col].values
        
        # Scale and predict
        X_scaled = scaler.transform(X_model.values)
        probs = model.predict_proba(X_scaled)
        predictions = model.predict(X_scaled)
        
        # Labels
        labels = {0: 'False Positive', 1: 'Candidate', 2: 'Confirmed'}
        
        # Create results
        results = []
        for i, (pred, prob) in enumerate(zip(predictions, probs)):
            results.append(PredictionResult(
                index=i,
                prediction=labels[pred],
                prediction_code=int(pred),
                prob_false_positive=float(prob[0]),
                prob_candidate=float(prob[1]),
                prob_confirmed=float(prob[2]),
                max_confidence=float(prob.max())
            ))
        
        # Statistics
        statistics = {
            "total": len(predictions),
            "confirmed": int((predictions == 2).sum()),
            "candidate": int((predictions == 1).sum()),
            "false_positive": int((predictions == 0).sum()),
            "exoplanets_total": int(((predictions == 1) | (predictions == 2)).sum())
        }
        
        # Top exoplanets
        exoplanet_mask = (predictions == 1) | (predictions == 2)
        top_exoplanets = []
        
        if exoplanet_mask.sum() > 0:
            exo_results = [r for i, r in enumerate(results) if exoplanet_mask[i]]
            top_exoplanets = sorted(
                exo_results,
                key=lambda x: x.max_confidence,
                reverse=True
            )[:10]
        
        return PredictionResponse(
            success=True,
            mission=mission,
            total_objects=len(predictions),
            statistics=statistics,
            predictions=results,
            top_exoplanets=top_exoplanets
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

