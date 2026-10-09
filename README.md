<div align="center">

# 💻 SOFTAVISION

**Sitio web oficial · Tienda en línea animada**

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5.0-443E38?style=flat-square&logo=zustand&logoColor=white)

Landing corporativa + e-commerce animado para **SOFTAVISION**: sistemas POS, videovigilancia, cómputo y accesorios en México 🇲🇽

Diseño *dark-first* responsive, carrito de compras persistente y animaciones con Framer Motion.

[✨ Características](#-características) · [🚀 Inicio rápido](#-inicio-rápido) · [📁 Estructura](#-estructura-del-proyecto) · [🗺 Rutas](#-rutas) · [🧠 Cómo funciona](#-cómo-funciona-todo) · [📦 Despliegue](#-despliegue)

</div>

---

## ✨ Características

- 🎬 **Preloader animado** con dibujado del logo (SVG `path-draw`) antes de entrar al sitio
- 🛍 **Catálogo con 10 productos** en 4 categorías (POS, Videovigilancia, Cómputo, Accesorios) con filtros animados
- 🛒 **Carrito persistente** con Zustand + `localStorage`: sobrevive al recargar la página
- 🗂 **Drawer lateral del carrito** con física *spring* que se abre al agregar un producto
- 💳 **Checkout** con formulario, métodos de pago, resumen de pedido y confirmación animada
- ✨ **+15 animaciones**: typewriter, parallax con scroll, contadores numéricos, apariciones al hacer *scroll*, efecto *scan*, marquesina y anillo pulsante
- 📱 **Mobile-first**: menú hamburguesa animado y layout adaptable (bottom-sheet en móvil)
- 🔍 **SEO básico**: `robots.txt`, `sitemap.xml`, meta description y favicon
- 📲 **Botón flotante de WhatsApp** con mensaje prellenado (`wa.me`)
- 🌐 **Acceso por LAN**: el servidor Vite queda expuesto en tu red para probar desde el celular

---

## 🛠 Tecnologías

| Tecnología | Versión | Para qué se usa |
|---|---|---|
| [React](https://react.dev/) | 18.3 | Componentes y UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.6 | Tipado estático (0 errores con `tsc`) |
| [Vite](https://vitejs.dev/) | 5.4 | Dev server ultrarrápido y build de producción |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Estilos utilitarios + temas personalizados |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animaciones y transiciones |
| [Zustand](https://zustand.docs.pmnd.rs/) | 5.0 | Estado global del carrito (con persistencia) |
| [React Router](https://reactrouter.com/) | 6.28 | Navegación tipo SPA |

---

## 🚀 Inicio rápido

**Requisitos:** [Node.js](https://nodejs.org/) 18 o superior y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/softavision-web.git
cd softavision-web

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abre **http://localhost:5173/** 🎉

> 📲 **Desde el celular (misma Wi-Fi):** usa `http://TU-IP:5173` (tu IP la ves con `ipconfig`). Si no carga, permite el puerto 5173 en el firewall de Windows:
> ```powershell
> New-NetFirewallRule -DisplayName "Vite Dev 5173" -Direction Inbound -Protocol TCP -LocalPort 5173 -Action Allow
> ```

### 📋 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:5173` (expuesto en la red local) |
| `npm run build` | Valida tipos (`tsc --noEmit`) y genera el build en `dist/` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run typecheck` | Solo revisa tipos de TypeScript sin compilar |

## 📁 Estructura del proyecto

```
softavision-web/
├── index.html                  # Punto de entrada HTML (meta, favicon)
├── package.json                # Scripts y dependencias
├── vite.config.ts              # Config de Vite (puerto 5173, host LAN)
├── tsconfig.json               # Configuración de TypeScript
├── tailwind.config.js          # Colores, fuentes y animaciones personalizadas
├── postcss.config.js           # PostCSS + Tailwind
│
├── public/
│   ├── favicon.svg             # Ícono del sitio
│   ├── robots.txt              # Instrucciones para buscadores
│   └── sitemap.xml             # Mapa del sitio para SEO
│
├── assets/aigc/images/         # Imágenes extra de productos
│
└── src/
    ├── main.tsx                # Monta <App /> en el DOM
    ├── App.tsx                 # Router + Preloader + layout global
    ├── index.css               # Tailwind base, utilidades y scrollbar
    │
    ├── data/
    │   ├── products.ts         # 🛍 Catálogo: 10 productos y categorías
    │   └── site.ts             # 📄 Contenido: stats, servicios, proyectos
    │
    ├── lib/
    │   ├── constants.ts        # ⚙️ Marca, contacto, links, helper WhatsApp
    │   └── utils.ts            # 🧰 formatPrice (MXN), classNames, slugify
    │
    ├── store/
    │   └── carts.ts            # 🛒 Carrito global (Zustand + persist)
    │
    ├── components/             # 🧩 20 componentes reutilizables
    │   ├── Navbar.tsx          #    Barra fija con menú y carrito
    │   ├── Hero.tsx            #    Portada con typewriter + parallax
    │   ├── ProductCard.tsx     #    Tarjeta con efecto scan
    │   ├── CartDrawer.tsx      #    Drawer lateral (spring)
    │   ├── WhatsAppButton.tsx  #    Botón flotante pulsante
    │   └── ...                 #    (Logo, Reveal, Footer, Contact, etc.)
    │
    ├── pages/                  # 📄 6 páginas (rutas)
    │   ├── HomePage.tsx        #    Landing de 11 secciones
    │   ├── StorePage.tsx       #    Tienda con filtros
    │   ├── Productpage.tsx     #    Detalle /:slug
    │   ├── CartPage.tsx        #    Carrito completo
    │   ├── CheckoutPage.tsx    #    Formulario de compra
    │   └── LegalPage.tsx       #    Privacidad y términos
    │
    └── assets/products/        # 📸 Imágenes de los productos
```

---

## 🗺 Rutas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | `HomePage` | Landing: Hero, servicios, tienda, proceso, proyectos, About, CTA y contacto |
| `/tienda` | `StorePage` | Catálogo con filtros animados por categoría |
| `/producto/:slug` | `Productpage` | Ficha del producto con especificaciones |
| `/carrito` | `CartPage` | Detalle del carrito: cantidades y subtotal |
| `/checkout` | `CheckoutPage` | Datos de contacto, pago y resumen del pedido |
| `/legal` | `LegalPage` | Política de privacidad y términos |
| `*` | `HomePage` | Ruta desconocida → redirige al inicio |

## 🧠 Cómo funciona todo

### 1. Encendido de la app (`src/App.tsx`)

```
Preloader (animado, se cierra solo)
        ↓
Navbar fija + CartDrawer + ScrollToTop
        ↓
<Routes> → la página según la URL
        ↓
Footer + Botón de WhatsApp flotante
```

Al cargar se muestra el `Preloader` con el logo dibujándose; cuando termina, se cierra con `AnimatePresence` y revela el sitio. `ScrollToTop` regresa al inicio en cada cambio de ruta.

### 2. Datos y contenido (sin backend)

Todo el contenido vive en archivos estáticos:

- **`src/data/products.ts`** → el catálogo. Cada producto tiene `id`, `slug` (URL), `name`, `category`, `price` (MXN), `image`, `description`, `specs[]` y `featured`. Se busca con `getProductBySlug(slug)`.
- **`src/data/site.ts`** → contenido de la landing: estadísticas animadas, servicios, sectores, proceso, proyectos, tecnologías y razones para elegirlos.
- **`src/lib/constants.ts`** → marca (`BRAND`), contacto (`CONTACT`), menú (`NAV_LINKS`), redes (`SOCIAL`) y el helper `whatsappLink(msg)` que genera el enlace a WhatsApp con mensaje prellenado.

> ✏️ **Para editar precios, nombres o textos**, solo toca estos archivos; ningún componente tiene datos hardcodeados.

### 3. Carrito de compras (`src/store/carts.ts`)

Estado global con **Zustand** y **persistencia** en `localStorage` (clave `softavision-cart`):

```ts
add(product, qty)  // agrega o incrementa → abre el drawer
remove(id)         // elimina un producto
setQty(id, qty)    // cambia cantidad (0 lo elimina)
clear()            // vacía el carrito (al confirmar el pedido)
```

- `selectCount(items)` → total de artículos (badge del navbar)
- `selectTotal(items)` → subtotal en pesos

**Flujo de compra:** `Tienda → Agregar (el drawer se abre) → Carrito → Checkout → Confirmación`. El pedido se confirma en el cliente y se limpia el carrito.

### 4. Animaciones (Framer Motion)

| Animación | Dónde | Cómo está hecha |
|---|---|---|
| Logo dibujándose | `Preloader` | `pathLength` del SVG con `motion.path` |
| Typewriter del título | `Hero` | Ciclo de texto con `useEffect` + `motion.span` |
| Parallax al hacer scroll | `Hero` | `useScroll` + `useTransform` |
| Apariciones al entrar en pantalla | `Reveal` (envuelve secciones) | `whileInView` con `viewport once` |
| Contadores numéricos | Estadísticas (`BusinessSection`) | `useMotionValue` + `useSpring` |
| Efecto escáner | `ProductCard` | Keyframe CSS `scan` de Tailwind |
| Filtrado de productos | `StorePage` | `AnimatePresence mode="popLayout"` |
| Subrayados/píldoras | `Navbar`, filtros | `layoutId` (se deslizan entre elementos) |
| Drawer del carrito | `CartDrawer` | Transición *spring* |
| Marquesina infinita | `TechStack` | Keyframe CSS `marquee` |
| Anillo pulsante | `WhatsAppButton` | Keyframe CSS `pulse-ring` |

### 5. Estilos (Tailwind)

Paleta personalizada en `tailwind.config.js`:

| Token | Color | Uso |
|---|---|---|
| `ink` | `#050D22` | Fondo principal oscuro |
| `brand` | `#1E5EFF` | Azul primario (botones, acentos) |
| `sky` | `#35C8F0` | Cian (hover, degradados) |

Clases utilitarias definidas en `src/index.css`: `container-site`, `btn-primary`, `btn-ghost`, `card`, `section-title`, `text-gradient`.

---

## ✏️ Personalización

| Qué cambiar | Archivo |
|---|---|
| Colores de la marca | `tailwind.config.js` → `theme.extend.colors` |
| Nombre, teléfono, WhatsApp, correo, dirección | `src/lib/constants.ts` → `BRAND` y `CONTACT` |
| Links del menú y redes sociales | `src/lib/constants.ts` → `NAV_LINKS`, `SOCIAL` |
| **Productos, precios y imágenes** | `src/data/products.ts` |
| Textos de la landing (stats, servicios, proyectos) | `src/data/site.ts` |
| Textos legales | `src/pages/LegalPage.tsx` |
| Título y meta description | `index.html` |

**Agregar un producto:** copia un bloque existente en `products.ts`, cambia `id` y `slug` (únicos), coloca tu imagen en `src/assets/products/` e impórtala arriba del archivo.

---

## 📦 Despliegue a producción

```bash
# Valida tipos + genera build en dist/
npm run build

# Verifica el build en local (http://localhost:4173)
npm run preview
```

El sitio es una **SPA estática** (`dist/`), así que funciona en cualquier host:

- **Vercel / Netlify:** conecta el repo, detecta Vite automáticamente. Build: `npm run build` · Salida: `dist`
- **GitHub Pages:** agrega `base: '/TU-REPO/'` en `vite.config.ts` antes de compilar
- **Hosting tradicional (cPanel, etc.):** sube el contenido de `dist/` y asegúrate de que las rutas caigan a `index.html`

> 🔎 Incluye `robots.txt` y `sitemap.xml` en `public/`; recuerda actualizar la URL del dominio en `sitemap.xml` después de publicar.

## 🐙 Publicar en GitHub

```bash
# 1. Inicializar el repositorio (solo la primera vez)
git init

# 2. Agregar todos los archivos (el .gitignore excluye node_modules, dist y logs)
git add .

# 3. Primer commit
git commit -m "SOFTAVISION v1.0.0 — sitio web con tienda animada"

# 4. Conectar con tu repo en GitHub (crea uno vacío en github.com)
git remote add origin https://github.com/TU-USUARIO/softavision-web.git

# 5. Subir
git branch -M main
git push -u origin main
```

Para actualizar después de cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

> 📦 El `.gitignore` incluido evita subir `node_modules/`, `dist/` y archivos `.log`.

---

## 📌 Notas y pendientes

- ⚠️ **Los precios del catálogo son de ejemplo** — reemplázalos en `src/data/products.ts` con los reales.
- El **checkout es demostrativo**: confirma el pedido en el navegador (no hay backend/pasarela de pago todavía).
- El enlace de las **redes sociales** apunta a `#` — cámbialos en `src/lib/constants.ts`.
- Los textos de `stats`, `projects` y `services` en `src/data/site.ts` son de muestra y se deben ajustar a datos reales.

---

## 📄 Licencia

Todos los derechos reservados © SOFTAVISION.

<div align="center">

**Hecho con ❤️ en México** 🇲🇽

*React · TypeScript · Vite · Tailwind CSS · Framer Motion · Zustand*

</div>

