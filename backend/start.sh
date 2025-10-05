#!/bin/bash
# Exoplanet Detector - Backend Start Script (Linux/Mac)

echo "Starting Exoplanet Detector API..."

# Check if venv exists
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    echo "Installing dependencies..."
    venv/bin/pip install -r requirements.txt
fi

# Activate venv and start server
echo "Activating virtual environment..."
source venv/bin/activate

echo "Starting API server on http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo "Press Ctrl+C to stop"
echo ""

uvicorn api.index:app --reload --port 8000

