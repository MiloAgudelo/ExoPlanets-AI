@echo off
REM Exoplanet Detector - Backend Start Script (Windows CMD)

echo Starting Exoplanet Detector API...

REM Check if venv exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo Installing dependencies...
    venv\Scripts\pip.exe install -r requirements.txt
)

REM Activate venv and start server
echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Starting API server on http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo Press Ctrl+C to stop
echo.

uvicorn api.index:app --reload --port 8000

