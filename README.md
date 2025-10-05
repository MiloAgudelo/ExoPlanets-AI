# Exoplanet Detector - AI-Powered Discovery

A full-stack web application for detecting and classifying exoplanets using machine learning models trained on Kepler, TESS, and K2 mission data.

## Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
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
