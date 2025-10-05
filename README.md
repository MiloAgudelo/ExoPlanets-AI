# 🌌 ExoPlanet - AI

<div align="center">

![ExoPlanet AI](frontend/public/images/exoplanet-logo.png)

**Democratizando el descubrimiento de exoplanetas mediante Machine Learning**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Python](https://img.shields.io/badge/Python-3.13-3776ab?style=flat-square&logo=python)](https://python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![LightGBM](https://img.shields.io/badge/LightGBM-ML-brightgreen?style=flat-square)](https://lightgbm.readthedocs.io/)

[🚀 Demo en Vivo](https://exoplanet-ai.ngrok.app/) • [📖 Documentación](./SETUP_GUIDE.md) • [🐛 Reportar Bug](https://github.com/MiloAgudelo/ExoPlanets-AI/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Resumen](#-resumen)
- [Demostración](#-demostración)
- [¿Cómo Funciona?](#-cómo-funciona)
- [Beneficios Clave](#-beneficios-clave)
- [Impacto Esperado](#-impacto-esperado)
- [Stack Tecnológico](#-stack-tecnológico)
- [Aspectos Innovadores](#-aspectos-innovadores)
- [Instalación Rápida](#-instalación-rápida)
- [Uso de Inteligencia Artificial](#-uso-de-inteligencia-artificial)
- [Fuentes de Datos](#-fuentes-de-datos)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 🌟 Resumen

**ExoPlanets-AI** es una plataforma web full-stack impulsada por inteligencia artificial que democratiza el descubrimiento de exoplanetas mediante modelos de Machine Learning de alto rendimiento. 

### 🎯 Lo que Ofrecemos

Desarrollamos **tres clasificadores especializados** entrenados con datos reales de las misiones espaciales:

| Misión | Precisión | Objetos Analizados |
|--------|-----------|-------------------|
| **Kepler** | 94% | 9,564+ |
| **K2** | 97% | 2,398+ |
| **TESS** | 77% | 15,314+ |

Nuestros modelos están optimizados con algoritmos **LightGBM** (Gradient Boosting) para maximizar la detección y reducir falsos positivos.

### 🚀 El Problema que Resolvemos

La plataforma resuelve el desafío de **analizar grandes volúmenes de datos astronómicos** al permitir que investigadores y entusiastas:

- 📤 Suban archivos **CSV** con curvas de luz
- 🤖 Obtengan **predicciones automáticas** en tres categorías:
  - ✅ Exoplanetas confirmados
  - 🔍 Candidatos prometedores
  - ❌ Falsos positivos
- 📊 Visualicen resultados en una **interfaz intuitiva** con estética espacial

Este proyecto **acelera la identificación de nuevos mundos**, traduce datos complejos en conocimiento accesible y promueve la **colaboración científica ciudadana** en la exploración más allá del sistema solar.

---

## 🎥 Demostración

### 🌐 Plataforma en Vivo

Visita nuestra demo interactiva: **[exoplanet-ai.ngrok.app](https://exoplanet-ai.ngrok.app/)**

### 📸 Capturas de Pantalla

<div align="center">

| Página Principal | Dashboard de Análisis |
|-----------------|----------------------|
| ![Home](frontend/public/images/exoplanet-logo.png) | ![Dashboard](frontend/public/images/exoplanet-logo.png) |

</div>

### ✨ Características Principales

- **Interfaz Espacial Inmersiva**: Starfield animado con efectos glassmorphism
- **Análisis en Tiempo Real**: Procesamiento de CSV en segundos
- **Dashboard Interactivo**: Visualización de predicciones con Recharts
- **Autenticación Segura**: Integración con Clerk
- **Responsive Design**: Optimizado para todos los dispositivos

---

## ⚙️ ¿Cómo Funciona?

El sistema utiliza **tres modelos LightGBM especializados**, entrenados con más de **27,000 objetos astronómicos** del NASA Exoplanet Archive.

### 🔄 Pipeline de Análisis

```
1️⃣ Usuario selecciona misión (Kepler, TESS o K2)
          ⬇️
2️⃣ Carga archivo CSV con curvas de luz
          ⬇️
3️⃣ Preprocesamiento automático
    • Transformaciones logarítmicas
    • Normalización de datos
          ⬇️
4️⃣ Feature Engineering (50+ características)
    • Ratios orbitales
    • Métricas de tránsito
    • Indicadores físicos
          ⬇️
5️⃣ Clasificación con modelo especializado
    • LightGBM optimizado por misión
    • Probabilidades de cada clase
          ⬇️
6️⃣ Resultados visualizados
    ✅ Confirmados | 🔍 Candidatos | ❌ Falsos Positivos
```

### 🧮 Características Derivadas

El sistema genera automáticamente más de **50 características** avanzadas, incluyendo:

- **Ratios Físicos**: `koi_depth / koi_prad`, `koi_period / koi_duration`
- **Métricas de Tránsito**: Profundidad, duración, forma
- **Parámetros Orbitales**: Período, semieje mayor, excentricidad
- **Indicadores de Confianza**: Signal-to-noise ratio, estadísticas χ²

---

## 💡 Beneficios Clave

| Beneficio | Impacto |
|-----------|---------|
| ⚡ **Velocidad** | Reduce de **semanas a minutos** el análisis de datos astronómicos |
| 🌍 **Democratización** | Acceso a herramientas de detección profesional sin requisitos técnicos |
| 🎨 **Usabilidad** | Interfaz intuitiva, sin necesidad de programación |
| 📈 **Escalabilidad** | Procesamiento por lotes de **miles de objetos** simultáneamente |
| 🤝 **Ciencia Ciudadana** | Fomenta la participación pública en descubrimientos científicos |

---

## 🌍 Impacto Esperado

ExoPlanets-AI busca **acelerar el descubrimiento de exoplanetas**, permitiendo que astrónomos profesionales y aficionados analicen grandes catálogos de datos de forma eficiente.

### 🎯 Objetivos

- 🔭 **Priorizar candidatos** prometedores para observaciones espectroscópicas de seguimiento
- 📚 **Contribuir** al entendimiento de la distribución planetaria en la galaxia
- 🚀 **Impulsar** la colaboración entre instituciones científicas y comunidades de astrónomos aficionados
- 🌌 **Facilitar** el análisis de datos de futuras misiones espaciales

---

## 🛠️ Stack Tecnológico

### Frontend

```typescript
├── Next.js 15 (App Router, RSC)
├── React 19 (Suspense, Transitions)
├── TypeScript 5.7 (Strict mode)
├── Tailwind CSS 4 (JIT compiler)
├── Framer Motion (Animaciones)
└── Recharts (Visualización de datos)
```

### Backend

```python
├── Python 3.13
├── FastAPI (API REST)
├── Uvicorn (ASGI server)
├── LightGBM (Clasificación)
└── pandas + NumPy (Procesamiento)
```

### Machine Learning

```
├── LightGBM (Gradient Boosting)
├── scikit-learn (Pipeline)
├── pandas (DataFrames)
├── NumPy (Arrays)
└── Matplotlib + Seaborn (Visualización)
```

### Base de Datos & Autenticación

```
├── PostgreSQL (Supabase)
├── Drizzle ORM
└── Clerk (Auth)
```

### DevOps & Deployment

```
├── Vercel (Frontend)
├── Vercel Serverless (Backend)
├── Git + GitHub
└── npm + pip
```

---

## 🚀 Aspectos Innovadores

### 1️⃣ Modelos Especializados

Tres clasificadores **independientes**, cada uno optimizado según las características únicas de su misión espacial:

- **Kepler**: Optimizado para curvas de luz de larga duración (4 años)
- **K2**: Adaptado a datos con mayor ruido instrumental
- **TESS**: Especializado en tránsitos de objetos brillantes

### 2️⃣ Feature Engineering Avanzado

Creación de ratios **físicamente significativos** que capturan relaciones orbitales complejas:

```python
# Ejemplos de características derivadas
depth_to_radius_ratio = koi_depth / (koi_prad ** 2)
period_to_duration_ratio = koi_period / koi_duration
impact_parameter = koi_impact * (1 + koi_prad / koi_srad)
```

### 3️⃣ UI Inmersiva

Interfaz con **starfield animado**, efectos **glassmorphism** y tema oscuro inspirado en observatorios astronómicos reales.

### 4️⃣ Pipeline Automatizado

Procesamiento **end-to-end** de archivos CSV heterogéneos con lectura automática de metadatos y detección de columnas relevantes.

### 5️⃣ Arquitectura Escalable

Diseño **serverless** preparado para múltiples usuarios simultáneos con optimización de recursos.

---

## 🏗️ Factores de Diseño y Rendimiento

| Factor | Estrategia |
|--------|-----------|
| **Precisión vs. Interpretabilidad** | Equilibrio entre alto rendimiento (94–97%) y modelos explicables |
| **Escalabilidad** | Arquitectura serverless con auto-scaling |
| **Accesibilidad** | Diseño responsive, controles intuitivos, paleta de alto contraste |
| **Validación Científica** | Cross-validation rigurosa y métricas ajustadas a conjuntos desbalanceados |
| **Optimización Web** | Bundle size reducido, lazy loading, SSR para máximo rendimiento |

---

## 🚀 Instalación Rápida

### Prerrequisitos

- **Node.js** 18+ y npm
- **Python** 3.10+
- **Git**

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/MiloAgudelo/ExoPlanets-AI.git
cd ExoPlanets-AI
```

### 2️⃣ Backend (FastAPI)

#### Opción A: Scripts Automatizados (Recomendado)

```bash
cd backend

# Windows PowerShell
.\start.ps1

# Windows CMD
start.bat

# Linux/Mac
chmod +x start.sh
./start.sh
```

#### Opción B: Configuración Manual

```bash
cd backend

# Crear entorno virtual
python -m venv venv

# Activar entorno
# Windows PowerShell:
.\venv\Scripts\Activate.ps1
# Windows CMD:
venv\Scripts\activate.bat
# Linux/Mac:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor
uvicorn api.index:app --reload --port 8000
```

El backend estará disponible en: **http://localhost:8000**

### 3️⃣ Frontend (Next.js)

```bash
cd frontend

# Instalar dependencias
npm install --legacy-peer-deps

# Configurar variables de entorno
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Ejecutar en desarrollo
npm run dev
```

El frontend estará disponible en: **http://localhost:3000**

### 4️⃣ Variables de Entorno

Crea un archivo `.env.local` en la carpeta `frontend`:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:8000

# Supabase (opcional)
DATABASE_URL=tu_url_de_supabase

# Clerk (opcional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_key
CLERK_SECRET_KEY=tu_clerk_secret
```

### 5️⃣ Verificar Instalación

1. Abre **http://localhost:3000**
2. Navega a "Analizar Datos" o "Asistente IA"
3. Sube un archivo CSV de prueba (disponible en `ml-pipeline/sample_data.csv`)
4. Verifica que las predicciones se generen correctamente

---

## 🤖 Uso de Inteligencia Artificial

ExoPlanets-AI integra herramientas de inteligencia artificial como **Cursor**, **GitHub Copilot**, **Claude AI**, **ChatGPT 5** (OpenAI API) y **Gemini**, empleadas **exclusivamente para aumentar la productividad y precisión** durante el desarrollo.

⚠️ **La IA NO sustituyó el diseño conceptual, científico ni creativo del proyecto.**

### 1️⃣ Desarrollo de Código (GitHub Copilot, Cursor, Claude AI, ChatGPT 5, Gemini)

- ✅ Asistencia en la generación de boilerplate TypeScript y Python
- ✅ Sugerencias para la implementación de componentes React y optimización de estados
- ✅ Mejora de queries SQL y funciones de preprocesamiento de datos
- ✅ Depuración y resolución de errores de compatibilidad en entornos Next.js / FastAPI

**Metadata**: Todos los archivos fuente incluyen comentarios que identifican secciones asistidas por IA.

### 2️⃣ Machine Learning (LightGBM – Gradient Boosting)

Los clasificadores son **redes de decisión** basadas en algoritmos de **gradient boosting** entrenadas sobre **27,000+ objetos astronómicos** del NASA Exoplanet Archive.

- ✅ Entrenamiento **supervisado**, con documentación completa de precisión, matrices de confusión y feature importance
- ✅ **Transparencia**: Los reportes de entrenamiento y validación se incluyen en la documentación técnica
- ❌ **No IA Generativa**: Los modelos **no crean contenido sintético**; únicamente clasifican datos reales de observaciones astronómicas

### 3️⃣ Documentación y Comunicación Técnica (Claude AI & ChatGPT 5)

- ✅ Generación y edición de archivos README, guías técnicas y documentación bilingüe (inglés / español)
- ✅ Revisión de redacción técnica, estructura narrativa y consistencia terminológica

**Metadata**: Cada archivo de documentación incluye una nota que indica asistencia parcial de IA.

### 4️⃣ Exclusiones de IA

**NO se utilizó inteligencia artificial para:**

- ❌ Creación de imágenes (el logotipo empleado es propiedad de NASA, no del proyecto)
- ❌ Generación de video o audio
- ❌ Modificación de elementos de marca oficiales
- ❌ Producción de datos sintéticos o aumentación de datasets

### 🏆 Originalidad y Propiedad Intelectual

El **concepto general**, la **arquitectura del sistema**, el **diseño de las características de Machine Learning** y la **lógica de negocio** son completamente **originales**.

Las herramientas de IA fueron utilizadas como **asistentes de productividad**, no como reemplazo de la creatividad, razonamiento científico o desarrollo técnico independiente del equipo.

---

## 📊 Fuentes de Datos

### NASA Exoplanet Archive

| Dataset | Objetos | Enlace |
|---------|---------|--------|
| **Kepler Objects of Interest (KOI)** | 9,564 | [KOI Cumulative List](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative) |
| **TESS Objects of Interest (TOI)** | 15,314 | [TOI Catalog](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=TOI) |
| **K2 Planets & Candidates** | 2,398 | [K2 Catalog](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=k2candidates) |

### Referencias Científicas

- 📄 [Exoplanet detection using machine learning](https://arxiv.org/abs/1903.10507)
- 📄 [Assessment of Ensemble-Based Machine Learning Algorithms for Exoplanet Identification](https://www.mdpi.com/2076-3417/13/4/2694)

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar ExoPlanets-AI:

1. **Fork** el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un **Pull Request**

### 📝 Guías de Contribución

- Sigue las convenciones de código (Biome/Ultracite para TypeScript)
- Agrega tests para nuevas funcionalidades
- Actualiza la documentación según corresponda

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver el archivo [LICENSE](./LICENSE) para más detalles.

---

## 👥 Equipo

Desarrollado con ❤️ por el equipo de ExoPlanets-AI

---

## 🙏 Agradecimientos

- **NASA Exoplanet Archive** por proporcionar los datasets
- **Kepler, TESS y K2** misiones espaciales
- Comunidad de **astrónomos aficionados** y científicos ciudadanos
- Herramientas de código abierto que hicieron posible este proyecto

---

<div align="center">

**[⬆ Volver arriba](#-exoplanet---ai)**

Made with 🚀 for the universe

</div>
