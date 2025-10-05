import joblib
from pathlib import Path
from typing import Any, Dict
import sys

# Add ml-pipeline to path
ML_PIPELINE_PATH = Path(__file__).parent.parent.parent.parent / "ml-pipeline"
sys.path.insert(0, str(ML_PIPELINE_PATH / "src"))

class MLModelLoader:
    """Load and manage ML models"""
    
    def __init__(self):
        self.models: Dict[str, Any] = {}
        self.scalers: Dict[str, Any] = {}
        self.features: Dict[str, list] = {}
        self.models_path = ML_PIPELINE_PATH / "models"
        
    def load_model(self, mission: str):
        """Load a specific model by mission"""
        if mission in self.models:
            return True
            
        try:
            model_file = self.models_path / f"exoplanet_model_{mission}.joblib"
            scaler_file = self.models_path / f"exoplanet_model_{mission}.scaler.joblib"
            features_file = self.models_path / f"exoplanet_model_{mission}.features.joblib"
            
            if not model_file.exists():
                return False
                
            self.models[mission] = joblib.load(model_file)
            self.scalers[mission] = joblib.load(scaler_file)
            self.features[mission] = joblib.load(features_file)
            
            return True
        except Exception as e:
            print(f"Error loading model {mission}: {e}")
            return False
    
    def load_all_models(self):
        """Load all available models"""
        missions = ["kepler", "tess", "k2"]
        for mission in missions:
            self.load_model(mission)
            
    def get_model(self, mission: str):
        """Get model, scaler and features"""
        if mission not in self.models:
            if not self.load_model(mission):
                return None, None, None
        return (
            self.models.get(mission),
            self.scalers.get(mission),
            self.features.get(mission)
        )

# Global instance
ml_loader = MLModelLoader()

