# Exoplanet Detector - Backend API

FastAPI backend for exoplanet detection using ML models.

## Features

- FastAPI REST API
- ML model loading from `ml-pipeline/`
- CSV file processing
- Prediction endpoints for Kepler, TESS, and K2 missions
- CORS enabled for frontend integration

## Quick Start

### Option 1: Use Start Scripts (Recommended)

```bash
# Windows PowerShell:
.\start.ps1

# Windows CMD:
start.bat

# Linux/Mac:
chmod +x start.sh
./start.sh
```

The scripts will automatically:
- Create virtual environment if needed
- Install dependencies if needed
- Activate venv
- Start the server

## Setup

### Option 2: Manual Setup

```bash
cd backend

# Create virtual environment (first time only)
python -m venv venv

# Activate virtual environment
# Windows PowerShell:
.\venv\Scripts\Activate.ps1
# Windows CMD:
venv\Scripts\activate.bat
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### Run Locally

```bash
# Make sure venv is activated (you should see (venv) in your prompt)
uvicorn api.index:app --reload --port 8000

# Alternative: run directly from venv without activation
.\venv\Scripts\uvicorn.exe api.index:app --reload --port 8000  # Windows
./venv/bin/uvicorn api.index:app --reload --port 8000  # Linux/Mac
```

### Access API

- API: http://localhost:8000
- Swagger Docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

### Health Check

```bash
GET /health
```

### List Models

```bash
GET /api/models
```

### Get Mission Info

```bash
GET /api/models/{mission}
```

### Predict Exoplanets

```bash
POST /api/predict/{mission}
Content-Type: multipart/form-data

file: CSV file
```

## Response Format

```json
{
  "success": true,
  "mission": "kepler",
  "total_objects": 100,
  "statistics": {
    "total": 100,
    "confirmed": 45,
    "candidate": 30,
    "false_positive": 25,
    "exoplanets_total": 75
  },
  "predictions": [...],
  "top_exoplanets": [...]
}
```

## Deployment

This API is ready for deployment on Vercel using the `handler` export in `api/index.py`.

Configure `vercel.json` for serverless deployment.

