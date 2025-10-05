# Exoplanet Detector - Setup Guide

## Complete Setup Instructions

### System Requirements
- Node.js 18+ and npm
- Python 3.9+
- Git
- Windows/macOS/Linux

---

## Step-by-Step Setup

### 1. Backend Setup (FastAPI)

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the API server
uvicorn api.index:app --reload --port 8000
```

**Verify Backend:**
- API Health: http://localhost:8000/health
- Swagger Docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

Expected response from /health:
```json
{
  "status": "healthy",
  "service": "exoplanet-detector-api",
  "version": "1.0.0"
}
```

---

### 2. Frontend Setup (Next.js)

Open a **new terminal** window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Create environment file
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Windows PowerShell:
"NEXT_PUBLIC_API_URL=http://localhost:8000" | Out-File -FilePath .env.local -Encoding utf8

# Start development server
npm run dev
```

**Verify Frontend:**
- Home Page: http://localhost:3000
- Dashboard: http://localhost:3000/dashboard

---

## Testing the Application

### 1. Test API Directly

```bash
# Health check
curl http://localhost:8000/health

# List available models
curl http://localhost:8000/api/models

# Get Kepler mission info
curl http://localhost:8000/api/models/kepler
```

### 2. Test via Frontend

1. Open http://localhost:3000
2. Click "Start Analyzing"
3. Select a mission (Kepler, TESS, or K2)
4. Upload a CSV file from `ml-pipeline/data/processed/`
   - Try: `kepler_features.csv`
   - Or: `tess_features.csv`
   - Or: `k2_features.csv`
5. Click "Analyze Exoplanets"
6. View results:
   - Statistics cards
   - Predictions table
   - Top 10 exoplanets

---

## Project Structure

```
ExoPlanets-AI/
├── frontend/                 # Next.js application
│   ├── app/
│   │   ├── page.tsx         # Landing page
│   │   ├── dashboard/       # Analysis page
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Styles
│   ├── components/
│   │   ├── space/           # StarfieldBackground, SpaceNavbar
│   │   └── exoplanet/       # Mission, File, Stats, Predictions
│   └── lib/
│       ├── api-client.ts    # API integration
│       └── theme.ts         # Space theme colors
│
├── backend/                  # FastAPI application
│   └── api/
│       ├── index.py         # Main app entry
│       ├── core/
│       │   ├── ml_loader.py # Model loading
│       │   └── preprocessing.py
│       └── routes/
│           ├── health.py
│           ├── models.py
│           └── predict.py
│
└── ml-pipeline/              # ML models and data
    ├── models/              # .joblib model files
    ├── data/processed/      # CSV datasets
    └── src/                 # Training scripts
```

---

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

For production:
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### Backend (Optional)
No environment variables required for local development.

For production, configure:
- Database URL (if using persistence)
- CORS origins
- API keys (if needed)

---

## Common Issues & Solutions

### Issue: npm install fails
**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue: Backend can't find models
**Solution:** Ensure ml-pipeline/models/ directory contains:
- exoplanet_model_kepler.joblib
- exoplanet_model_kepler.scaler.joblib
- exoplanet_model_kepler.features.joblib
- (Same for tess and k2)

### Issue: Frontend can't connect to backend
**Solution:**
1. Verify backend is running on port 8000
2. Check .env.local has correct API URL
3. Restart frontend dev server

### Issue: CSV upload fails
**Solution:**
- Ensure file is valid CSV format
- Check file has required columns
- Try sample files from ml-pipeline/data/processed/

---

## Development Workflow

### Making Changes to Frontend
1. Edit files in `frontend/`
2. Hot reload automatically updates browser
3. Check console for errors
4. Test in multiple browsers

### Making Changes to Backend
1. Edit files in `backend/api/`
2. Server auto-reloads with `--reload` flag
3. Test via /docs endpoint
4. Verify with frontend integration

### Adding New Features
1. Create feature branch: `git checkout -b feature/name`
2. Make changes
3. Test locally
4. Commit: `git commit -m "feat: description"`
5. Push: `git push origin feature/name`
6. Create Pull Request

---

## Production Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel
```

Set environment variables in Vercel dashboard.

### Backend (Railway/Render/Fly.io)
```bash
cd backend
# Follow platform-specific deployment guide
```

Or deploy as Vercel Serverless Function using the Mangum handler.

---

## Performance Tips

### Frontend
- Use production build: `npm run build && npm start`
- Enable caching for API responses
- Lazy load large datasets
- Optimize images

### Backend
- Use async/await for I/O operations
- Cache model loading (already implemented)
- Add rate limiting for production
- Monitor memory usage

---

## Security Considerations

### Frontend
- Validate file uploads client-side
- Sanitize user inputs
- Use HTTPS in production
- Implement authentication (if needed)

### Backend
- Add API rate limiting
- Validate file types and sizes
- Use CORS properly
- Log security events

---

## Monitoring & Debugging

### Frontend Debugging
```bash
# Check browser console
# Use React DevTools
# Enable verbose logging
```

### Backend Debugging
```bash
# Check server logs
# Use /docs for API testing
# Enable debug mode in uvicorn
uvicorn api.index:app --reload --port 8000 --log-level debug
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/)

---

## Support

For issues or questions:
1. Check existing GitHub issues
2. Review documentation
3. Create new issue with:
   - System info
   - Error messages
   - Steps to reproduce

---

## License

MIT License - See LICENSE file

---

## Contributors

Created by [@MiloAgudelo](https://github.com/MiloAgudelo)

Pull requests welcome!

