# Script para crear el archivo .env.local con la configuración de Supabase
# Uso: .\create-env-file.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Configuración de .env.local" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en el directorio correcto
$currentPath = Get-Location
Write-Host "📁 Directorio actual: $currentPath" -ForegroundColor Yellow
Write-Host ""

# Preguntar por los valores necesarios
Write-Host "Por favor, proporciona los siguientes valores:" -ForegroundColor Green
Write-Host ""

# POSTGRES_URL
Write-Host "1️⃣  POSTGRES_URL (URL de Supabase)" -ForegroundColor Cyan
Write-Host "   Ejemplo: postgresql://postgres:password@db.xxxxx.supabase.co:5432/postgres" -ForegroundColor Gray
$postgresUrl = Read-Host "   Ingresa tu POSTGRES_URL"
Write-Host ""

# CLERK Keys
Write-Host "2️⃣  CLERK PUBLISHABLE KEY" -ForegroundColor Cyan
Write-Host "   Ejemplo: pk_test_xxxxxxxxxxxxx" -ForegroundColor Gray
$clerkPublishable = Read-Host "   Ingresa tu CLERK_PUBLISHABLE_KEY"
Write-Host ""

Write-Host "3️⃣  CLERK SECRET KEY" -ForegroundColor Cyan
Write-Host "   Ejemplo: sk_test_xxxxxxxxxxxxx" -ForegroundColor Gray
$clerkSecret = Read-Host "   Ingresa tu CLERK_SECRET_KEY"
Write-Host ""

# AUTH_SECRET
Write-Host "4️⃣  AUTH_SECRET" -ForegroundColor Cyan
Write-Host "   (Presiona Enter para generar uno automáticamente)" -ForegroundColor Gray
$authSecret = Read-Host "   Ingresa tu AUTH_SECRET o deja vacío"
if ([string]::IsNullOrWhiteSpace($authSecret)) {
    # Generar un secreto aleatorio de 32 bytes en base64
    $bytes = New-Object byte[] 32
    [Security.Cryptography.RNGCryptoServiceProvider]::Create().GetBytes($bytes)
    $authSecret = [Convert]::ToBase64String($bytes)
    Write-Host "   ✅ Secreto generado automáticamente" -ForegroundColor Green
}
Write-Host ""

# Crear el contenido del archivo
$envContent = @"
# ===========================
# EXOPLANET ML API
# ===========================
# Backend API URL for ML predictions
NEXT_PUBLIC_API_URL=http://localhost:8000

# ===========================
# SUPABASE DATABASE
# ===========================
# URL de conexión a la base de datos PostgreSQL de Supabase
POSTGRES_URL=$postgresUrl

# ===========================
# CLERK AUTHENTICATION
# ===========================
# Get your keys from: https://dashboard.clerk.com/last-active?path=api-keys

# Clerk API Keys (REQUIRED)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$clerkPublishable
CLERK_SECRET_KEY=$clerkSecret

# Clerk Sign-in/Sign-up URLs (REQUIRED)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Clerk Redirect URLs (OPTIONAL - Recommended)
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# ===========================
# LEGACY AUTH (Optional)
# ===========================
# Generate a random secret: https://generate-secret.vercel.app/32 or ``openssl rand -base64 32``
AUTH_SECRET=$authSecret

# ===========================
# AI SERVICES (Optional)
# ===========================
# OpenAI API Key (if using OpenAI for chat)
# OPENAI_API_KEY=sk-****

# Anthropic API Key (if using Claude for chat)
# ANTHROPIC_API_KEY=sk-ant-****

# ===========================
# DEVELOPMENT SETTINGS
# ===========================
NODE_ENV=development
"@

# Guardar el archivo
$envPath = Join-Path -Path $currentPath -ChildPath "frontend\.env.local"
try {
    $envContent | Out-File -FilePath $envPath -Encoding UTF8 -Force
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ Archivo .env.local creado exitosamente" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "📄 Ubicación: $envPath" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🚀 Próximos pasos:" -ForegroundColor Yellow
    Write-Host "   1. cd frontend" -ForegroundColor White
    Write-Host "   2. npm install drizzle-kit -D" -ForegroundColor White
    Write-Host "   3. npx drizzle-kit push" -ForegroundColor White
    Write-Host "   4. npm run dev" -ForegroundColor White
    Write-Host ""
} catch {
    Write-Host "❌ Error al crear el archivo: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Intenta crear el archivo manualmente:" -ForegroundColor Yellow
    Write-Host "   New-Item -Path 'frontend\.env.local' -ItemType File -Force" -ForegroundColor White
    Write-Host ""
}

Write-Host "Presiona cualquier tecla para continuar..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
