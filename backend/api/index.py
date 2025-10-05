from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

from .routes import health, models, predict
from .core.ml_loader import ml_loader

# Create app
app = FastAPI(
    title="Exoplanet Detector API",
    description="ML API for exoplanet detection",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load models at startup
@app.on_event("startup")
async def startup_event():
    print("Loading ML models...")
    ml_loader.load_all_models()
    print("Models loaded successfully")

# Include routers
app.include_router(health.router, tags=["health"])
app.include_router(models.router, prefix="/api", tags=["models"])
app.include_router(predict.router, prefix="/api", tags=["predictions"])

@app.get("/")
async def root():
    return {
        "message": "Exoplanet Detector API",
        "status": "online",
        "docs": "/docs"
    }

# Handler for Vercel
handler = Mangum(app)

