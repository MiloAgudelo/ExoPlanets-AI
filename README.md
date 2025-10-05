# Exoplanet Detector - AI-Powered Discovery

A full-stack web application for detecting and classifying exoplanets using machine learning models trained on Kepler, TESS, and K2 mission data.

## Quick Start

### Backend

**Option 1: Using start scripts (easiest)**
```bash
cd backend

# Windows PowerShell:
.\start.ps1

# Windows CMD:
start.bat

# Linux/Mac:
chmod +x start.sh
./start.sh
```

**Option 2: Manual setup**
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

# Run server
uvicorn api.index:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install --legacy-peer-deps
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
npm run dev
```

Visit http://localhost:3000

## Features
- Space-themed UI with animated starfield
- ML-powered exoplanet detection
- Support for Kepler, TESS, and K2 missions
- Real-time CSV analysis
- Interactive predictions dashboard

## Tech Stack
- Frontend: Next.js 15, React 19, Tailwind CSS
- Backend: FastAPI, scikit-learn, pandas
- ML: Random Forest Classifiers (94% accuracy)

See individual README files for detailed documentation.
