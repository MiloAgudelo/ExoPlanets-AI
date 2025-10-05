# 🚀 Configuración de Supabase para ExoPlanets-AI

Esta guía te llevará paso a paso para configurar Supabase como base de datos PostgreSQL para tu aplicación.

---

## 📋 Paso 1: Crear una cuenta en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Haz clic en **"Start your project"** o **"Sign in"**
3. Crea una cuenta usando:
   - GitHub (recomendado)
   - Google
   - Email

---

## 🗂️ Paso 2: Crear un nuevo proyecto

1. Una vez dentro del dashboard, haz clic en **"New Project"**
2. Completa la información:
   - **Name**: `exoplanets-ai` (o el nombre que prefieras)
   - **Database Password**: Crea una contraseña segura (guárdala bien)
   - **Region**: Selecciona la región más cercana a ti (ej: `South America (São Paulo)`)
   - **Pricing Plan**: Selecciona **"Free"** para desarrollo

3. Haz clic en **"Create new project"**
4. Espera 1-2 minutos mientras Supabase configura tu base de datos

---

## 🔑 Paso 3: Obtener las credenciales de conexión

Una vez que tu proyecto esté listo:

1. En el dashboard de Supabase, ve a **Settings** (⚙️ en la barra lateral)
2. Selecciona **"Database"**
3. Desplázate hasta la sección **"Connection string"**
4. Selecciona el modo **"URI"**
5. Copia la URL de conexión que se ve así:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxxx.supabase.co:5432/postgres
   ```
6. **IMPORTANTE**: Reemplaza `[YOUR-PASSWORD]` con la contraseña que creaste en el Paso 2

---

## 📝 Paso 4: Configurar variables de entorno

Ahora vamos a crear el archivo `.env.local` en el directorio `frontend/`:

La URL de conexión que copiaste del Paso 3 será tu `POSTGRES_URL`.

### Ejemplo de cómo debe verse tu `.env.local`:

```env
# ===========================
# EXOPLANET ML API
# ===========================
NEXT_PUBLIC_API_URL=http://localhost:8000

# ===========================
# SUPABASE DATABASE
# ===========================
# Reemplaza con tu URL de conexión de Supabase
POSTGRES_URL=postgresql://postgres:[YOUR-PASSWORD]@db.xxxxxxxxxxxxx.supabase.co:5432/postgres

# ===========================
# CLERK AUTHENTICATION
# ===========================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
CLERK_SECRET_KEY=tu_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# ===========================
# LEGACY AUTH
# ===========================
AUTH_SECRET=tu_auth_secret

# ===========================
# DEVELOPMENT SETTINGS
# ===========================
NODE_ENV=development
```

---

## 🗄️ Paso 5: Ejecutar las migraciones de base de datos

Una vez que tengas el archivo `.env.local` configurado, necesitas crear las tablas en tu base de datos:

### Instalar dependencias (si no lo has hecho):
```powershell
cd frontend
npm install
```

### Ejecutar migraciones con Drizzle:
```powershell
cd frontend
npx drizzle-kit push
```

Este comando creará todas las tablas necesarias en tu base de datos de Supabase:
- `User` - Usuarios de la aplicación
- `Chat` - Conversaciones
- `Message_v2` - Mensajes
- `Vote_v2` - Votos/ratings
- `Document` - Documentos/artefactos
- `Suggestion` - Sugerencias
- `Stream` - Streams de datos

---

## ✅ Paso 6: Verificar la configuración

### 1. Verifica que las tablas se crearon:
   - Ve a tu proyecto en Supabase
   - Haz clic en **"Table Editor"** en la barra lateral
   - Deberías ver todas las tablas creadas

### 2. Reinicia tu servidor de desarrollo:
   ```powershell
   cd frontend
   npm run dev
   ```

### 3. Accede a tu aplicación:
   - Abre [http://localhost:3000](http://localhost:3000)
   - Los errores de base de datos deberían haber desaparecido
   - La navbar debería mostrarse correctamente

---

## 🔍 Solución de problemas

### Error: "Failed to connect to database"
- Verifica que tu `POSTGRES_URL` esté correctamente configurada en `.env.local`
- Asegúrate de haber reemplazado `[YOUR-PASSWORD]` con tu contraseña real
- Verifica que no haya espacios al inicio o final de la URL

### Error: "Password authentication failed"
- La contraseña en tu URL de conexión es incorrecta
- Ve a Supabase → Settings → Database → "Reset Database Password"
- Actualiza tu `.env.local` con la nueva contraseña

### Las tablas no se crean
- Verifica que `drizzle-kit` esté instalado: `npm install drizzle-kit -D`
- Intenta usar `npx drizzle-kit generate` primero, luego `npx drizzle-kit push`

### La navbar no se ve en /chat
- Este problema se resuelve automáticamente una vez que la base de datos esté funcionando
- El sidebar necesita cargar el historial de chats desde la base de datos
- Si persiste, limpia el caché del navegador (Ctrl + Shift + R)

---

## 📊 Información adicional

### Pool de conexiones
Supabase maneja automáticamente el pool de conexiones. El plan gratuito incluye:
- **Conexiones directas**: 60
- **Pooled connections**: 200

### Monitoreo
Puedes monitorear tu base de datos en:
- Supabase Dashboard → Reports
- Ver queries, conexiones activas, y uso de recursos

### Backups
Supabase hace backups automáticos:
- **Plan Free**: Backups diarios (retención de 7 días)
- Puedes hacer backups manuales desde el dashboard

---

## 🎉 ¡Listo!

Ahora tu aplicación debería estar conectada a Supabase y funcionando correctamente. Los errores de base de datos deberían haber desaparecido y la navegación debería mostrarse correctamente.

### Próximos pasos:
1. Configura Clerk para autenticación (si aún no lo has hecho)
2. Configura las API keys de OpenAI/Anthropic para el chat con IA
3. Asegúrate de que el backend de ML esté corriendo (`backend/start.ps1`)

¿Necesitas ayuda con algún otro paso? ¡Pregúntame! 🚀
