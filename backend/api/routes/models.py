from fastapi import APIRouter
from typing import Dict, Any

router = APIRouter()

MISSION_INFO = {
    "kepler": {
        "name": "Kepler",
        "launched": "2009",
        "ended": "2018",
        "planets_discovered": "2800+",
        "accuracy": "94%",
        "description": "The Kepler mission discovered thousands of exoplanets using the transit method.",
        "key_features": ["koi_period", "koi_depth", "koi_prad", "koi_teq"],
    },
    "tess": {
        "name": "TESS",
        "launched": "2018",
        "ended": "Active",
        "planets_discovered": "400+",
        "accuracy": "77%",
        "description": "TESS surveys the entire sky to find exoplanets around nearby bright stars.",
        "key_features": ["pl_orbper", "pl_trandep", "pl_rade", "pl_eqt"],
    },
    "k2": {
        "name": "K2",
        "launched": "2014",
        "ended": "2018",
        "planets_discovered": "500+",
        "accuracy": "97%",
        "description": "K2 was the extended mission of Kepler after mechanical failures.",
        "key_features": ["pl_orbper", "pl_trandep", "pl_rade", "pl_eqt"],
    }
}

@router.get("/models")
async def get_available_models():
    """List available models"""
    return {
        "available_models": ["kepler", "tess", "k2"],
        "total": 3
    }

@router.get("/models/{mission}")
async def get_mission_info(mission: str):
    """Info for a specific mission"""
    if mission not in MISSION_INFO:
        return {"error": "Mission not found"}
    return MISSION_INFO[mission]

