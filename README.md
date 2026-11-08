 <p align="center">
  <img src="assets/softavision-logo-transparente.png" alt="SoftAVision" width="280" />
</p>

<h1 align="center">Soluciones digitales que impulsan tu negocio</h1>

<p align="center">
  Tecnología, innovación y soluciones inteligentes para empresas y negocios.
</p>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Inter&weight=500&size=17&duration=3000&pause=1000&color=1E5EFF&center=true&vCenter=true&width=500&lines=Tecnolog%C3%ADa+para+hacer+crecer+tu+negocio;Soluciones+digitales+a+tu+medida;Innovaci%C3%B3n+que+transforma+ideas" alt="Mensajes animados de SoftAVision" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Versi%C3%B3n-2.0.0-1E5EFF?style=flat-square" />
  <img src="https://img.shields.io/badge/Estado-En%20desarrollo-35C8F0?style=flat-square" />
  <img src="https://img.shields.io/badge/Idioma-Espa%C3%B1ol-0A1B3D?style=flat-square" />
</p>

<p align="center">
  <a href="#-acerca-del-proyecto">Proyecto</a> ·
  <a href="#-características">Características</a> ·
  <a href="#-tecnologías">Tecnologías</a> ·
  <a href="#-instalación">Instalación</a> ·
  <a href="#-despliegue">Despliegue</a>
</p>

---

## ✦ Acerca del proyecto

**SOFTAVISION** es una plataforma digital corporativa que integra una presentación empresarial, catálogo de productos y funcionalidades de comercio electrónico.

El proyecto está orientado a ofrecer soluciones tecnológicas para negocios y empresas en México, incluyendo:

- Sistemas punto de venta (POS).
- Videovigilancia y cámaras de seguridad.
- Equipos de cómputo y accesorios.
- Licencias y soluciones de software.
- Servicios tecnológicos y soporte especializado.

La plataforma busca combinar una experiencia visual moderna con una arquitectura escalable, una navegación intuitiva y herramientas que faciliten el proceso de compra.

## ✦ Características

### Experiencia de usuario

- Interfaz moderna y adaptable a dispositivos móviles.
- Diseño visual minimalista.
- Animaciones y transiciones con Framer Motion.
- Preloader animado con identidad visual.
- Indicadores de carga y skeleton loaders.
- Drawer lateral para el carrito de compras.
- Página personalizada para rutas no encontradas.
- Integración de acceso directo a WhatsApp.

### Catálogo y comercio electrónico

- Catálogo organizado por categorías.
- Productos administrados desde archivos de datos.
- Carrito de compras persistente.
- Gestión de cantidades y productos.
- Resumen de compra.
- Proceso de checkout.
- Opciones de pago contempladas: transferencia, efectivo y tarjeta mediante Mercado Pago.

### Integraciones y servicios

- API para consulta de precios.
- Integración preparada para Mercado Pago.
- Envío de información de pedidos mediante Resend.
- Funciones serverless para operaciones del backend.
- Configuración para despliegue en Vercel.

> Algunas integraciones requieren configurar sus respectivas credenciales y servicios externos antes de utilizarse en producción.

## ✦ Tecnologías

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,vite,tailwind,nodejs,git,github&perline=7" alt="Tecnologías utilizadas" />
</p>

| Tecnología | Uso |
|---|---|
| React 18 | Construcción de interfaces |
| TypeScript 5 | Tipado y mantenibilidad |
| Vite 5 | Entorno de desarrollo y compilación |
| Tailwind CSS 3 | Estilos y diseño adaptable |
| Framer Motion 11 | Animaciones y transiciones |
| Zustand 5 | Administración del estado global |
| React Router 6 | Navegación entre páginas |
| Vitest 3 | Pruebas automatizadas |
| Testing Library | Pruebas de componentes |
| Node.js | Funciones de servidor |
| Vercel | Despliegue y funciones serverless |

## ✦ Arquitectura del proyecto

La aplicación está organizada por responsabilidades para facilitar su mantenimiento y evolución.

```text
SOFTAVISION/
│
├── api/
│   ├── create-preference.ts
│   ├── send-order.ts
│   ├── precios.ts
│   └── precios-proveedor.json
│
├── public/
│   └── assets/
│
├── assets/
│   └── softavision-logo-transparente.png
│
├── src/
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── data/
│   │   ├── products.ts
│   │   ├── resources.ts
│   │   └── site.ts
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── payments.ts
│   │
│   ├── store/
│   │   ├── carts.ts
│   │   └── ui.ts
│   │
│   └── tests/
│       ├── utils.test.ts
│       └── cart.test.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

*La estructura es una referencia de organización; conserva los nombres y directorios reales de tu repositorio si difieren.*

## ✦ Instalación

### Requisitos previos

- Node.js.
- npm.
- Git.

### 1. Clonar el repositorio

```bash
git clone https://github.com/AIXJC/Sitio-Web-Softavision-2.git
```

### 2. Acceder al proyecto

```bash
cd Sitio-Web-Softavision-2
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar el entorno de desarrollo

```bash
npm run dev
```

### 5. Compilar para producción

```bash
npm run build
```

### 6. Ejecutar pruebas

```bash
npm run test
```

> Consulta los scripts disponibles en `package.json` para verificar los comandos configurados en tu versión del proyecto.

## ✦ Configuración de variables de entorno

Para habilitar las integraciones externas, configura las variables correspondientes en un archivo `.env.local`:

```env
MERCADOPAGO_ACCESS_TOKEN=tu_token_de_mercadopago
RESEND_API_KEY=tu_api_key_de_resend
```

**Importante:**

- No publiques credenciales privadas en GitHub.
- No incluyas archivos `.env` con información sensible.
- Configura las mismas variables en el panel de tu proveedor de despliegue.
- Utiliza credenciales de prueba antes de habilitar pagos reales.

## ✦ API y servicios

La aplicación contempla funciones serverless para separar las operaciones de servidor de la interfaz de usuario.

| Endpoint | Responsabilidad |
|---|---|
| `/api/precios` | Consulta de información de precios |
| `/api/create-preference` | Creación de preferencias de pago |
| `/api/send-order` | Procesamiento y envío de información de pedidos |

Los endpoints requieren que sus servicios y variables de entorno estén correctamente configurados.

## ✦ Navegación y módulos

La plataforma contempla módulos para organizar la experiencia:

- Inicio: presentación de SoftAVision.
- Catálogo: exploración de productos.
- Recursos: información y contenido de interés.
- Carrito: administración de productos seleccionados.
- Checkout: flujo de compra.
- Contacto: comunicación con el negocio.

## ✦ Administración del estado

Zustand permite centralizar el estado de la aplicación y mantener separadas las responsabilidades de los módulos.

Entre los estados contemplados se encuentran:

- Carrito de compras.
- Persistencia de información mediante localStorage.
- Estado de interfaces y componentes.
- Control de elementos visuales.

## ✦ Identidad visual

La experiencia visual de SOFTAVISION está orientada a transmitir innovación, confianza y profesionalismo.

### Paleta de colores

| Color | Código | Aplicación |
|---|---|---|
| Ink | `#050D22` | Fondos oscuros |
| Brand Blue | `#1E5EFF` | Color principal |
| Sky Blue | `#35C8F0` | Acentos y detalles |
| White | `#FFFFFF` | Fondos y contraste |

### Dirección de diseño

- Minimalismo digital.
- Jerarquía visual clara.
- Espaciado equilibrado.
- Transparencias y profundidad.
- Microinteracciones.
- Transiciones suaves.
- Diseño adaptable.

## ✦ Animaciones y experiencia visual

El proyecto utiliza Framer Motion para crear interacciones y transiciones dentro de la aplicación.

Entre los elementos visuales contemplados se encuentran:

- Animaciones de entrada.
- Transiciones entre secciones.
- Efectos de interacción.
- Animaciones del carrito.
- Preloader de identidad visual.
- Efectos de carga.

**Nota:** GitHub no ejecuta JavaScript ni CSS personalizado dentro de un README. Por eso, los elementos animados de esta documentación utilizan recursos externos compatibles, como SVG.

## ✦ Pruebas y calidad

El proyecto contempla herramientas para validar funcionalidades y componentes:

- Vitest para pruebas unitarias.
- Testing Library para pruebas de componentes.
- Happy DOM como entorno de pruebas.
- GitHub Actions para automatización de flujos de trabajo.

## ✦ Despliegue

La plataforma está preparada para trabajar con Vercel como proveedor de despliegue.

### Consideraciones

1. Conectar el repositorio de GitHub con Vercel.
2. Configurar el comando de instalación.
3. Configurar el comando de compilación.
4. Configurar las variables de entorno.
5. Verificar las funciones serverless.
6. Realizar pruebas antes de publicar.

**Importante:** las funciones ubicadas en `api/` requieren un entorno compatible con funciones serverless. Publicar únicamente la carpeta `dist/` no despliega automáticamente estas funciones.

## ✦ Roadmap

- [x] Interfaz corporativa.
- [x] Catálogo de productos.
- [x] Carrito de compras.
- [x] Diseño adaptable.
- [x] Animaciones de interfaz.
- [x] Estructura de integración de pagos.
- [ ] Optimización continua del rendimiento.
- [ ] Ampliación del catálogo.
- [ ] Panel administrativo.
- [ ] Gestión avanzada de inventario.
- [ ] Automatización de procesos.
- [ ] Nuevas integraciones empresariales.

## ✦ Contribuciones

Este proyecto es desarrollado y mantenido como parte de la evolución tecnológica de SoftAVision.

Las sugerencias, mejoras y propuestas son bienvenidas.

## ✦ Autor

<p align="center">
  <strong>Alexander Juárez</strong>
  <br />
  Desarrollo de software · Soluciones tecnológicas
  <br /><br />
  <a href="https://github.com/AIXJC">
    <img src="https://img.shields.io/badge/GitHub-AIXJC-181717?style=flat-square&logo=github" alt="GitHub" />
  </a>
</p>

## ✦ Licencia

Este proyecto es propiedad de SoftAVision. El uso, distribución o modificación del código deberá contar con la autorización correspondiente.

---

<p align="center">
  <img src="assets/softavision-logo-transparente.png" alt="SoftAVision" width="110" />
</p>

<p align="center">
  <strong>SOFTAVISION</strong>
  <br />
  Soluciones digitales que impulsan tu negocio.
  <br /><br />
  <sub>Diseñado con tecnología, construido para crecer.</sub>
</p>
