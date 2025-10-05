# 🔐 Configuración de Clerk para ExoPlanets-AI

Este documento explica cómo configurar Clerk para la autenticación de la aplicación.

## 📋 Resumen de la Configuración

Según la [documentación oficial de Clerk](https://clerk.com/docs/guides/development/customize-redirect-urls), necesitas configurar:

1. **Variables de entorno** - Claves de API y URLs de redirección
2. **Clerk Dashboard** - Configuración de la aplicación (opcional)

---

## 🔑 1. Variables de Entorno

### Paso 1: Obtener tus claves de Clerk

1. Ve a [Clerk Dashboard](https://dashboard.clerk.com)
2. Selecciona o crea una aplicación
3. En el menú lateral, ve a **"API Keys"**
4. Copia tu **Publishable Key** (empieza con `pk_test_` o `pk_live_`)
5. Copia tu **Secret Key** (empieza con `sk_test_` o `sk_live_`)

### Paso 2: Actualizar tu archivo `.env.local`

Crea o actualiza el archivo `frontend/.env.local` con las siguientes variables:

```bash
# ===========================
# CLERK AUTHENTICATION (REQUERIDO)
# ===========================

# Claves de API de Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_TU_CLAVE_AQUI
CLERK_SECRET_KEY=sk_test_TU_CLAVE_AQUI

# URLs de Sign-in y Sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# URLs de redirección (RECOMENDADO)
# Después de iniciar sesión o registrarse, el usuario será redirigido a "/"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# URLs de redirección forzada (OPCIONAL - actualmente comentado)
# Si descomentas estas líneas, SIEMPRE redirigirá a /chat
# sin importar de dónde vino el usuario
# NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/chat
# NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/chat
```

> ⚠️ **IMPORTANTE**: El archivo `.env.local` está en `.gitignore` y NO debe ser commiteado.

---

## 🔄 2. Tipos de Redirección

Según la [documentación de Clerk](https://clerk.com/docs/guides/development/customize-redirect-urls), hay dos tipos de redirección:

### 🔹 FALLBACK Redirect (Recomendado)

Las variables **FALLBACK** solo se usan si no hay un `redirect_url` en la URL:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

**Comportamiento:**
- Usuario hace clic en un botón de sign-in desde `/dashboard` → Se redirige a `/sign-in?redirect_url=/dashboard`
- Después de autenticarse → Vuelve a `/dashboard` ✅
- Usuario navega directamente a `/sign-in` (sin `redirect_url`) → Después de autenticarse va a `/` (fallback)

### 🔹 FORCE Redirect

Las variables **FORCE** siempre redirigen a la URL especificada, ignorando el `redirect_url`:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/chat
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/chat
```

**Comportamiento:**
- Sin importar de dónde venga el usuario → Siempre va a `/chat` después de autenticarse

> 💡 **Recomendación**: Usa **FALLBACK** para mejor experiencia de usuario. Solo usa **FORCE** si necesitas que todos los usuarios vayan a una página específica después de autenticarse.

---

## 🎨 3. Configuración del Dashboard de Clerk (Opcional)

Aunque las variables de entorno son suficientes, también puedes configurar estos valores en el Clerk Dashboard:

1. Ve a [Clerk Dashboard](https://dashboard.clerk.com)
2. Selecciona tu aplicación
3. Ve a **"Paths"** en el menú lateral
4. Configura (OPCIONAL - las variables de entorno tienen prioridad):
   - **Sign-in path**: `/sign-in`
   - **Sign-up path**: `/sign-up`
   - **After sign-in**: `/` (o `/chat` si lo prefieres)
   - **After sign-up**: `/` (o `/chat` si lo prefieres)

---

## ✅ 4. Verificar la Configuración

### Verificar variables de entorno:

```bash
cd frontend
npm run dev
```

Si todo está configurado correctamente:

1. ✅ Deberías poder acceder a `http://localhost:3000`
2. ✅ Las rutas públicas funcionan: `/`, `/dashboard`, `/compare`, `/demo`
3. ✅ Al intentar acceder a `/chat` sin estar autenticado → Redirige a `/sign-in`
4. ✅ Después de autenticarte → Te redirige de vuelta a donde estabas o al fallback

### Probar el flujo completo:

1. **Registro de nuevo usuario:**
   - Ve a `/sign-up`
   - Crea una cuenta
   - Deberías ser redirigido a `/` (o a donde especifiques en `SIGN_UP_FALLBACK_REDIRECT_URL`)

2. **Inicio de sesión:**
   - Ve a `/sign-in`
   - Inicia sesión
   - Deberías ser redirigido a `/` (o a donde especifiques en `SIGN_IN_FALLBACK_REDIRECT_URL`)

3. **Acceso a ruta protegida:**
   - Estando en `/dashboard`, haz clic en un enlace al chat
   - Deberías ser redirigido a `/sign-in?redirect_url=/chat`
   - Después de autenticarte, vuelves a `/chat` ✅

---

## 🐛 Troubleshooting

### Problema: "Missing Clerk keys"

**Solución:** Verifica que las variables estén en `frontend/.env.local` y que el archivo exista.

### Problema: "Redirect loop"

**Solución:** 
- Verifica que `/sign-in` y `/sign-up` estén como rutas públicas en el middleware
- Revisa que `NEXT_PUBLIC_CLERK_SIGN_IN_URL` y `NEXT_PUBLIC_CLERK_SIGN_UP_URL` estén correctamente configuradas

### Problema: "User is redirected to wrong page"

**Solución:**
- Si usas `FORCE_REDIRECT`, verifica que sea el comportamiento deseado
- Cambia a `FALLBACK_REDIRECT` para respetar el `redirect_url` de la URL

---

## 📚 Recursos

- [Documentación oficial de Clerk - Custom Redirect URLs](https://clerk.com/docs/guides/development/customize-redirect-urls)
- [Clerk Dashboard](https://dashboard.clerk.com)
- [Clerk Next.js Quickstart](https://clerk.com/docs/quickstarts/nextjs)
- [Variables de entorno de Clerk](https://clerk.com/docs/guides/development/clerk-environment-variables)

---

## 🎯 Configuración Actual del Proyecto

Las siguientes rutas están configuradas:

| Ruta | Tipo | Descripción |
|------|------|-------------|
| `/` | Pública | Página principal |
| `/dashboard` | Pública | Dashboard de exoplanetas |
| `/compare` | Pública | Comparación de exoplanetas |
| `/demo` | Pública | Demo |
| `/sign-in` | Pública | Página de inicio de sesión |
| `/sign-up` | Pública | Página de registro |
| `/chat` | Protegida | Chat con IA (requiere autenticación) |
| `/chat/:id` | Protegida | Chat específico |

**Middleware configurado en:** `frontend/middleware.ts`

---

¿Necesitas ayuda? Revisa los logs en la consola del navegador o contacta al equipo de soporte.

