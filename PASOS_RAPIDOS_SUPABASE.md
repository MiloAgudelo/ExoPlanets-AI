# ⚡ Pasos Rápidos - Configurar Supabase

## 🎯 Resumen ejecutivo

Tienes errores porque **NO HAY BASE DE DATOS CONFIGURADA**. La solución es usar Supabase (PostgreSQL gratuito en la nube).

---

## 🚀 Configuración en 5 pasos (10 minutos)

### 1️⃣ Crear cuenta en Supabase (2 min)
```
🔗 https://supabase.com
- Regístrate con GitHub (recomendado)
```

### 2️⃣ Crear proyecto (2 min)
```
Dashboard → "New Project"
- Name: exoplanets-ai
- Password: [GUÁRDALA BIEN - la necesitarás]
- Region: South America (São Paulo)
- Plan: Free
```

### 3️⃣ Obtener URL de conexión (1 min)
```
Settings → Database → Connection string → URI

Copiarás algo como:
postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres

⚠️ REEMPLAZA [YOUR-PASSWORD] con tu contraseña del paso 2
```

### 4️⃣ Crear archivo .env.local (2 min)
```powershell
# Crea el archivo en la carpeta frontend
cd D:\ExoPlanets-AI\frontend
New-Item -Path .env.local -ItemType File -Force
```

**Abre el archivo `frontend/.env.local` y pega esto:**

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8000

# SUPABASE - REEMPLAZA CON TU URL
POSTGRES_URL=postgresql://postgres:TU_PASSWORD@db.xxxxx.supabase.co:5432/postgres

# CLERK - Ya deberías tenerlas configuradas
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_tu_key_aqui
CLERK_SECRET_KEY=sk_test_tu_key_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# AUTH SECRET
AUTH_SECRET=genera-un-secreto-aleatorio-32-caracteres-minimo

# DEVELOPMENT
NODE_ENV=development
```

### 5️⃣ Crear las tablas en Supabase (3 min)
```powershell
cd D:\ExoPlanets-AI\frontend

# Instalar drizzle-kit si no lo tienes
npm install drizzle-kit -D

# Crear las tablas
npx drizzle-kit push
```

---

## ✅ Verificar que funciona

```powershell
cd D:\ExoPlanets-AI\frontend
npm run dev
```

**Resultado esperado:**
- ✅ No más errores de "database query"
- ✅ La navbar se muestra en /chat
- ✅ Puedes ver el historial de conversaciones
- ✅ Todo funciona correctamente

---

## 🆘 ¿Problemas?

### Error: "Failed to connect"
- Verifica que `POSTGRES_URL` esté correcta en `.env.local`
- Asegúrate de reemplazar `[YOUR-PASSWORD]` con tu contraseña real

### Error: "Password authentication failed"  
- La contraseña es incorrecta
- Ve a Supabase → Settings → Database → Reset Password

### Las tablas no se crean
```powershell
# Intenta generar primero
npx drizzle-kit generate

# Luego empuja las migraciones
npx drizzle-kit push
```

---

## 📚 Documentación completa

Para más detalles, revisa: `SUPABASE_SETUP.md`

---

## 🎉 ¡Eso es todo!

Con estos 5 pasos tu aplicación debería funcionar perfectamente con Supabase.

**Beneficios de Supabase:**
- ✅ 500 MB de base de datos gratis
- ✅ Backups automáticos
- ✅ Dashboard visual para ver tus datos
- ✅ No necesitas instalar PostgreSQL localmente
- ✅ Fácil de escalar cuando lo necesites
