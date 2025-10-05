# Exoplanet Detector - Quick Start Guide

## ✅ Backend is Running!

Your backend API is currently running at:
- **API:** http://localhost:8000
- **Health Check:** http://localhost:8000/health
- **Interactive Docs:** http://localhost:8000/docs
- **Models Available:** Kepler, TESS, K2

## 🚀 Next Steps

### 1. Start the Frontend

Open a **NEW terminal window** (keep the backend running) and run:

```bash
cd frontend
npm run dev
```

Wait for it to compile, then visit: **http://localhost:3000**

### 2. Test the Application

1. Open http://localhost:3000 in your browser
2. Click **"Start Analyzing"** button
3. Select **Kepler** mission (recommended)
4. Upload a test CSV file from: `D:\ExoPlanets-AI\ml-pipeline\data\processed\kepler_features.csv`
5. Click **"Analyze Exoplanets"**
6. View your predictions!

## 🎯 What You Should See

### Landing Page (http://localhost:3000)
- Black background with animated stars
- Blue/purple gradient text
- Mission statistics cards
- Professional space theme

### Dashboard (http://localhost:3000/dashboard)
- Mission selector (Kepler, TESS, K2)
- File upload area (drag & drop)
- Results section with:
  - Statistics cards (Total, Confirmed, Candidates, False Positives)
  - Predictions table with sorting
  - Top 10 exoplanets by confidence

## 📁 Test Data Files

Use these CSV files for testing:
```
ml-pipeline/data/processed/
├── kepler_features.csv   (Recommended - 94% accuracy)
├── tess_features.csv     (77% accuracy)
└── k2_features.csv       (97% accuracy)
```

## 🛠️ For Future Sessions

### Backend (PowerShell)
```bash
cd backend
.\start.ps1
```

### Frontend
```bash
cd frontend
npm run dev
```

## ⚡ Pro Tips

1. **Keep both terminals open** - backend in one, frontend in another
2. **Backend must start first** before frontend
3. **Hot reload enabled** - changes auto-refresh
4. **Check /docs** - Interactive API documentation at http://localhost:8000/docs

## 🎨 Design Features Implemented

✅ Space-themed UI with starfield animation  
✅ Glassmorphism effects on cards  
✅ Gradient borders with hover effects  
✅ Blue/Purple/Cyan color scheme  
✅ Professional typography (Inter + Space Grotesk)  
✅ Fully responsive design  
✅ NO emojis in the UI (as requested)  

## 🔧 Troubleshooting

### Backend Issues

**Port already in use:**
```bash
# Find process using port 8000
netstat -ano | findstr :8000
# Kill the process (use PID from above)
taskkill /PID <PID> /F
```

**Models not loading:**
- Verify files exist in `ml-pipeline/models/`
- Check console output for errors

### Frontend Issues

**Can't connect to backend:**
1. Verify backend is running: http://localhost:8000/health
2. Check `.env.local` has: `NEXT_PUBLIC_API_URL=http://localhost:8000`
3. Restart frontend dev server

**npm install fails:**
```bash
npm install --legacy-peer-deps
```

## 📊 Expected Results

When you upload `kepler_features.csv`, you should see:
- Total objects analyzed
- Number of confirmed exoplanets
- Number of candidates
- Number of false positives
- Confidence scores for each prediction
- Top 10 highest confidence exoplanets

## 🌟 Features to Explore

1. **Mission Switching** - Compare results across Kepler, TESS, and K2
2. **Table Sorting** - Click column headers to sort by confidence or index
3. **Statistics Cards** - See distribution of classifications
4. **Confidence Visualization** - Progress bars showing certainty
5. **Glassmorphism Effects** - Hover over cards to see glow borders

## 📝 What's Been Deployed to GitHub

✅ Frontend with space theme  
✅ Backend with FastAPI  
✅ Start scripts for Windows/Mac/Linux  
✅ Virtual environment setup  
✅ Complete documentation  
✅ `.gitignore` for both frontend/backend  

Repository: https://github.com/MiloAgudelo/ExoPlanets-AI

## 🎯 Current Status

| Component | Status | URL |
|-----------|--------|-----|
| Backend API | ✅ Running | http://localhost:8000 |
| Frontend | ⏳ Pending | Run `npm run dev` |
| ML Models | ✅ Loaded | Kepler, TESS, K2 |
| Documentation | ✅ Complete | See README files |

## 💡 Next Development Steps

1. Test with all three missions
2. Try different CSV files
3. Explore the AI chatbot page (template included)
4. Customize colors in `frontend/lib/theme.ts`
5. Deploy to Vercel (both frontend and backend)

## 🚀 Ready to Deploy?

### Frontend to Vercel
```bash
cd frontend
npm run build
vercel
```

### Backend to Vercel
The backend is already configured with Mangum for serverless deployment on Vercel.

## 📞 Need Help?

- Check SETUP_GUIDE.md for detailed instructions
- Review backend/README.md for API documentation
- Visit http://localhost:8000/docs for interactive API testing

---

**Happy exoplanet hunting! 🌌🪐**

*No emojis were harmed in the making of this application's UI.*

