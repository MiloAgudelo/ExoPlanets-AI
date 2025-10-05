# 🚀 Guía Rápida - ExoPlanets AI (Actualizada)

## ✅ Problema Resuelto

La ruta `/chat` ahora funciona correctamente. El problema era un conflicto de rutas en Next.js.

---

## 📋 Requisitos Previos

- Node.js 18+
- Python 3.9+
- Cuenta en Clerk (gratis) - [Crear cuenta](https://clerk.com)

---

## ⚡ Inicio Rápido (5 minutos)

### 1. Configurar Clerk (Requerido para /chat)

```bash
# 1. Ve a https://dashboard.clerk.com
# 2. Crea una nueva aplicación
# 3. Copia tus API keys
# 4. Edita frontend/.env.local con tus claves:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_TU_CLAVE_AQUI
CLERK_SECRET_KEY=sk_test_TU_CLAVE_AQUI
```

### 2. Iniciar Backend (Terminal 1)

```bash
cd backend
.\start.ps1    # Windows PowerShell
# o
./start.sh     # Linux/Mac
```

### 3. Iniciar Frontend (Terminal 2)

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

### 4. ¡Listo! 🎉

Abre tu navegador:
- 🏠 Landing: http://localhost:3000
- 📊 Dashboard ML: http://localhost:3000/dashboard
- 💬 Chat IA: http://localhost:3000/chat ✅ **AHORA FUNCIONA**
- 📖 API Docs: http://localhost:8000/docs

---

## 🔄 Estructura de Rutas (Actualizada)

```
/                → Landing page (público)
/dashboard       → Análisis ML (público)
/chat            → Chat con IA (requiere auth) ✅ NUEVO
/chat/[id]       → Chat específico (requiere auth)
/sign-in         → Login (Clerk)
/sign-up         → Registro (Clerk)
```

---

## 🐛 Solución de Problemas

### "/chat me redirige a /sign-in"
**Esto es correcto.** Necesitas:
1. Configurar Clerk (ver paso 1)
2. Crear una cuenta o iniciar sesión
3. Entonces podrás acceder a /chat

### "Missing Clerk keys"
Edita `frontend/.env.local` y agrega tus claves de Clerk.

### "Backend no responde"
Verifica que el backend esté corriendo en http://localhost:8000/health

---

## 📚 Documentación Completa

Para más detalles, revisa:
- [IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md) - Todos los cambios realizados
- [CLERK_SETUP.md](./CLERK_SETUP.md) - Configuración detallada de Clerk
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Guía completa de instalación

---

## ✅ Checklist de Verificación

- [ ] Backend corriendo en puerto 8000
- [ ] Frontend corriendo en puerto 3000
- [ ] Clerk configurado en .env.local
- [ ] Puedes acceder a http://localhost:3000
- [ ] Puedes acceder a http://localhost:3000/dashboard
- [ ] Puedes crear cuenta en http://localhost:3000/sign-up
- [ ] Puedes acceder a http://localhost:3000/chat después de login ✅

---

¡Disfruta explorando exoplanetas con IA! 🪐🤖
