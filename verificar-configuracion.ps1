# Script para verificar que todo esté configurado correctamente
# Uso: .\verificar-configuracion.ps1

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Verificación de Configuración" -ForegroundColor Cyan
Write-Host "  ExoPlanets-AI + Supabase" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$allGood = $true

# 1. Verificar archivo .env.local
Write-Host "1️⃣  Verificando archivo .env.local..." -ForegroundColor Yellow
if (Test-Path "frontend\.env.local") {
    Write-Host "   ✅ Archivo .env.local existe" -ForegroundColor Green
    
    # Verificar POSTGRES_URL
    $envContent = Get-Content "frontend\.env.local" -Raw
    if ($envContent -match "POSTGRES_URL=postgresql://") {
        Write-Host "   ✅ POSTGRES_URL está configurada" -ForegroundColor Green
    } else {
        Write-Host "   ❌ POSTGRES_URL no está configurada correctamente" -ForegroundColor Red
        Write-Host "      Edita frontend\.env.local y agrega tu URL de Supabase" -ForegroundColor Yellow
        $allGood = $false
    }
    
    # Verificar Clerk keys
    if ($envContent -match "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_") {
        Write-Host "   ✅ CLERK_PUBLISHABLE_KEY está configurada" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  CLERK_PUBLISHABLE_KEY no está configurada" -ForegroundColor Yellow
        Write-Host "      Necesitarás configurar Clerk para usar autenticación" -ForegroundColor Gray
    }
} else {
    Write-Host "   ❌ Archivo .env.local NO existe" -ForegroundColor Red
    Write-Host "      Ejecuta: .\create-env-file.ps1" -ForegroundColor Yellow
    $allGood = $false
}

Write-Host ""

# 2. Verificar node_modules en frontend
Write-Host "2️⃣  Verificando dependencias del frontend..." -ForegroundColor Yellow
if (Test-Path "frontend\node_modules") {
    Write-Host "   ✅ Dependencias instaladas" -ForegroundColor Green
} else {
    Write-Host "   ❌ Dependencias NO instaladas" -ForegroundColor Red
    Write-Host "      Ejecuta: cd frontend && npm install" -ForegroundColor Yellow
    $allGood = $false
}

Write-Host ""

# 3. Verificar backend
Write-Host "3️⃣  Verificando backend..." -ForegroundColor Yellow
if (Test-Path "backend\venv") {
    Write-Host "   ✅ Entorno virtual de Python existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Entorno virtual de Python no existe" -ForegroundColor Yellow
    Write-Host "      Ejecuta: cd backend && python -m venv venv && venv\Scripts\activate && pip install -r requirements.txt" -ForegroundColor Gray
}

if (Test-Path "ml-pipeline\models\exoplanet_model_kepler.joblib") {
    Write-Host "   ✅ Modelos de ML entrenados" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Modelos de ML no encontrados" -ForegroundColor Yellow
    Write-Host "      Ejecuta: cd ml-pipeline && python run.py" -ForegroundColor Gray
}

Write-Host ""

# 4. Verificar puertos disponibles
Write-Host "4️⃣  Verificando puertos..." -ForegroundColor Yellow

# Puerto 3000 (Frontend)
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "   ⚠️  Puerto 3000 ya está en uso" -ForegroundColor Yellow
    Write-Host "      Si es tu aplicación, está bien. Si no, ciérrala." -ForegroundColor Gray
} else {
    Write-Host "   ✅ Puerto 3000 disponible (Frontend)" -ForegroundColor Green
}

# Puerto 8000 (Backend)
$port8000 = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
if ($port8000) {
    Write-Host "   ⚠️  Puerto 8000 ya está en uso" -ForegroundColor Yellow
    Write-Host "      Si es tu aplicación, está bien. Si no, ciérrala." -ForegroundColor Gray
} else {
    Write-Host "   ✅ Puerto 8000 disponible (Backend)" -ForegroundColor Green
}

Write-Host ""

# 5. Resumen
Write-Host "========================================" -ForegroundColor Cyan
if ($allGood) {
    Write-Host "  ✅ TODO LISTO PARA INICIAR" -ForegroundColor Green
    Write-Host "========================================`n" -ForegroundColor Cyan
    
    Write-Host "🚀 Comandos para iniciar:`n" -ForegroundColor Yellow
    Write-Host "   Terminal 1 (Backend):" -ForegroundColor White
    Write-Host "   cd backend" -ForegroundColor Gray
    Write-Host "   .\start.ps1`n" -ForegroundColor Gray
    
    Write-Host "   Terminal 2 (Frontend):" -ForegroundColor White
    Write-Host "   cd frontend" -ForegroundColor Gray
    Write-Host "   npm run dev`n" -ForegroundColor Gray
    
    Write-Host "📱 Luego abre:" -ForegroundColor Yellow
    Write-Host "   http://localhost:3000`n" -ForegroundColor Cyan
} else {
    Write-Host "  ⚠️  FALTAN ALGUNAS CONFIGURACIONES" -ForegroundColor Yellow
    Write-Host "========================================`n" -ForegroundColor Cyan
    
    Write-Host "📋 Revisa los puntos marcados arriba en ❌ o ⚠️`n" -ForegroundColor Yellow
    
    Write-Host "📚 Documentación disponible:" -ForegroundColor White
    Write-Host "   - INSTRUCCIONES_FINALES.md" -ForegroundColor Gray
    Write-Host "   - RESUMEN_BASE_DE_DATOS.md" -ForegroundColor Gray
    Write-Host "   - PASOS_RAPIDOS_SUPABASE.md`n" -ForegroundColor Gray
}

Write-Host "Presiona cualquier tecla para continuar..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
