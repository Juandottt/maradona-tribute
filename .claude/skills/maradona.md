# 🏆 PROYECTO: Maradona Tribute — Sitio Web Inmersivo
**Estudiante:** Juan Francisco Constantín  
**Carrera:** Licenciatura en Sistemas — ORT University Uruguay  
**Fecha:** Abril 2026  
**Tipo:** Proyecto académico / portfolio personal

---

## 🎯 CONCEPTO CENTRAL

Un **sitio web tributo inmersivo** a Diego Armando Maradona construido como **Single Page Application (SPA)** en React 18. El usuario "viaja" cronológicamente por las etapas de su vida a través de storytelling visual, animaciones y diseño impactante.

**El problema que resuelve:**  
La generación joven no vivió a Maradona. Los sitios actuales son estáticos, aburridos o puramente comerciales. No existe una experiencia digital inmersiva que cuente su historia de forma visual y emotiva.

**Diferencial:**  
No es un HTML estático con texto e imágenes. Es una experiencia con scroll animado, transiciones cinematográficas y secciones con identidad visual propia. Fue prototipada con Claude Design antes de ser implementada.

---

## 👤 PÚBLICO OBJETIVO

- Generación joven (15-30 años) que no lo vio jugar
- Fanáticos del fútbol en general
- Evaluadores académicos (proyecto ORT)

---

## 🗺️ ARQUITECTURA DE CONTENIDO

### Secciones / Rutas

| # | Sección | Contenido |
|---|---------|-----------|
| 1 | **Hero** | Nombre, foto icónica, frase, año de nacimiento/muerte |
| 2 | **Infancia** | Villa Fiorito, Buenos Aires, Argentinos Juniors, "Las Cebollitas" |
| 3 | **Barcelona** | FC Barcelona 1981-1984, debut europeo |
| 4 | **Napoli** | SSC Napoli 1984-1991, Serie A ×2, UEFA Cup, ídolo popular |
| 5 | **Mundial 86** | México 1986, "La Mano de Dios", "El Gol del Siglo" vs Inglaterra |
| 6 | **Despedida** | Retiro 1997, discurso, legado, muerte 25 nov 2020 |

### Paleta Visual

```
Negro profundo    #0A0A0A   → fondo principal
Dorado            #FFD700   → acentos, títulos
Celeste Argentina #75AADB   → secciones de selección
Blanco            #F5F5F5   → texto principal
Azul Napoli       #0C44A0   → sección Napoli
Rojo Barcelona    #A50044   → sección Barcelona
```

---

## 🛠️ STACK TECNOLÓGICO

### Frontend (única capa — proyecto 100% frontend)

| Herramienta | Versión | Rol |
|-------------|---------|-----|
| **React** | 18 | Framework principal (SPA) |
| **Vite** | latest | Build tool / dev server |
| **TailwindCSS** | 3.x | Estilos utility-first |
| **Framer Motion** | 10.x | Animaciones — el diferencial visual |
| **React Router** | v6 | Navegación entre secciones |

### Herramientas de desarrollo

| Herramienta | Uso |
|-------------|-----|
| VS Code | Editor principal frontend |
| Git + GitHub | Control de versiones |
| Claude Design | Prototipado UI antes de codear |
| Claude Code | Asistente en terminal |

### No hay backend
Este proyecto es **100% frontend estático**. No requiere API, base de datos ni servidor. Los datos (textos, fechas, frases) viven en archivos JSON locales o directamente en componentes.

---

## 📁 ESTRUCTURA DE ARCHIVOS PROPUESTA

```
maradona-tribute/
├── public/
│   └── images/          → fotos de Maradona (libres de derechos)
├── src/
│   ├── assets/          → fonts, íconos SVG
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Timeline.jsx
│   │   └── SectionCard.jsx
│   ├── sections/
│   │   ├── Infancia.jsx
│   │   ├── Barcelona.jsx
│   │   ├── Napoli.jsx
│   │   ├── Mundial86.jsx
│   │   └── Despedida.jsx
│   ├── data/
│   │   └── maradona.json   → datos: fechas, frases, stats
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✨ FEATURES PLANEADAS

### MVP (entrega académica)
- [ ] Hero inmersivo con animación de entrada
- [ ] Navegación fija con scroll suave
- [ ] 5 secciones de vida con identidad visual propia
- [ ] Frases icónicas de Maradona con tipografía destacada
- [ ] Timeline visual cronológico
- [ ] Diseño 100% responsivo (mobile + desktop)
- [ ] Animaciones de scroll con Framer Motion

### Nice to have (si hay tiempo)
- [ ] Contador: días desde su nacimiento / desde su muerte
- [ ] Sección de stats: goles, partidos, títulos
- [ ] Modo claro/oscuro
- [ ] Sonido ambient opcional (himno de Napoli, etc.)
- [ ] Easter egg: "La Mano de Dios" interactivo

---

## 🎨 PROCESO DE DISEÑO

### Paso 1 — Claude Design (antes de codear)
Usar Claude Design para prototipar:
1. Hero: layout, tipografía, fondo
2. Una sección de vida completa
3. Navegación y colores globales
4. Exportar como base para React

### Paso 2 — Implementación
Traducir el prototipo a componentes React con TailwindCSS + Framer Motion.

### Paso 3 — Animaciones
Agregar `motion.div` de Framer Motion para:
- Fade-in al hacer scroll
- Transiciones entre secciones
- Efectos de parallax en el Hero

---

## 📐 COMPONENTE CLAVE: Framer Motion

```jsx
// Ejemplo: sección que aparece al hacer scroll
import { motion } from 'framer-motion'

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
)
```

---

## 📦 SETUP INICIAL

```bash
# Crear proyecto
npm create vite@latest maradona-tribute -- --template react

# Instalar dependencias
cd maradona-tribute
npm install
npm install framer-motion
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 🗣️ FRASES ICÓNICAS (contenido confirmado)

> *"La pelota no se mancha."* — Discurso de despedida, 2001

> *"Yo siempre quise ser jugador de fútbol, y lo fui."*

> *"Nací en Villa Fiorito y moriré siendo del pueblo."*

> *"El que no salta es un inglés."* — Estadio San Paolo, Napoli

---

## ⚠️ CONSIDERACIONES ACADÉMICAS

- El proyecto debe demostrar **conocimiento de React 18** (hooks, componentes, props, estado)
- El uso de **Framer Motion** demuestra integración de librerías de terceros
- La estructura de carpetas debe seguir **buenas prácticas** (separación por features/secciones)
- Incluir `README.md` en el repositorio explicando el proyecto
- Subir a **GitHub Pages** o **Vercel** para acceso público (evaluación online)

---

## 🔗 REFERENCIAS / INSPIRACIÓN

- [maradona's estate official site](https://diegoarmandomaradonaeo.com) — sitio oficial del legado
- [vitamizu maradona page](https://vitamizu.com/maradona) — energética con su imagen
- Awwwards / Dribbble para referencia de storytelling inmersivo

---

**Próximo paso:** Prototipar el Hero en Claude Design con el prompt:  
*"Diseñá el hero de un sitio tributo a Diego Maradona: fondo negro oscuro, título 'DIEGO ARMANDO MARADONA' en dorado, subtítulo 'El Mejor de Todos', imagen de fondo difuminada, y una frase icónica abajo. Estilo cinematográfico, oscuro e impactante."*
