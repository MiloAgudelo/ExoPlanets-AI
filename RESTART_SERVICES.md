# 🔄 Restart Services - After Fixes

## ✅ Fixes Applied

1. ✅ Added `lightgbm==4.5.0` to backend requirements
2. ✅ Installed lightgbm in backend venv
3. ✅ Added `AUTH_SECRET` to frontend/.env.local

## 🚀 Restart Instructions

### 1. Restart Backend (REQUIRED)

**In the terminal running the backend:**
- Press `Ctrl+C` to stop the current server
- Then run:

```bash
cd D:\ExoPlanets-AI\backend
.\venv\Scripts\uvicorn.exe api.index:app --reload --port 8000
```

**OR use the start script:**
```bash
cd D:\ExoPlanets-AI\backend
.\start.ps1
```

### 2. Restart Frontend (REQUIRED)

**In the terminal running the frontend:**
- Press `Ctrl+C` to stop the current server
- Then run:

```bash
cd D:\ExoPlanets-AI\frontend
npm run dev
```

---

## ✅ What Should Happen After Restart

### Backend Console Output Should Show:
```
INFO:     Uvicorn running on http://127.0.0.1:8000
Loading ML models...
Models loaded successfully    ← No more "lightgbm" errors!
INFO:     Application startup complete.
```

### Frontend Should:
- Start without AUTH_SECRET errors
- Load successfully at http://localhost:3000
- Allow navigation without authentication issues

---

## 🧪 Quick Test

After restarting both services:

1. **Test Backend:**
   ```bash
   curl http://localhost:8000/health
   ```
   Should return: `{"status":"healthy",...}`

2. **Test Frontend:**
   - Visit: http://localhost:3000
   - Should see the landing page with stars ✨
   - No auth errors in console

3. **Test Full Flow:**
   - Go to: http://localhost:3000/dashboard
   - Select "Kepler" mission
   - Upload: `ml-pipeline/data/processed/kepler_features.csv`
   - Click "Analyze Exoplanets"
   - See results! 🎉

---

## 🐛 If Problems Persist

### Backend Still Shows Lightgbm Error:
```bash
cd backend
.\venv\Scripts\pip.exe install -r requirements.txt
# Then restart
```

### Frontend Still Shows AUTH_SECRET Error:
Check that `.env.local` contains:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
AUTH_SECRET=<your-generated-secret>
```

If missing, run:
```bash
cd frontend
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
# Add a secret (any random string):
echo "AUTH_SECRET=your-random-secret-here-at-least-32-chars" >> .env.local
```

---

## 📝 Summary

| Service | Action | Expected Result |
|---------|--------|-----------------|
| Backend | Restart | Models load without errors |
| Frontend | Restart | No AUTH_SECRET errors |
| Both | Test | Dashboard works end-to-end |

---

**After restarting, you should be good to go! 🚀**

