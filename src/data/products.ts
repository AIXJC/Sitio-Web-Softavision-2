import posTerminal from '../assets/products/pos-terminal.jpg';
import posTablet from '../assets/products/pos-tablet.jpg';
import caja from '../assets/products/cashier.jpg'; // real: estación de cobro táctil
import camaraDomo from '../assets/products/camara.jpg'; // real: cámara dome en poste
import laptopBusiness from '../assets/products/laptop.webp'; // real: laptop plateada
import kitPerifericos from '../assets/products/accesorios.jpg'; // real: teclado + mouse
import mandoGaming from '../assets/products/control.jpg'; // real: mando Xbox
import pcGamer from '../../assets/aigc/images/prod-computadora_1791430981_000.png';
import pcGamerCombo from '../assets/products/cashier.webp'; // real: PC gamer con monitor
import laptopUltrabook from '../../assets/aigc/images/prod-laptop_1791430976_000.png';
import licWindows from '../assets/products/lic-windows.svg';
import licPack from '../assets/products/lic-pack.svg';
import licEset from '../assets/products/lic-eset.svg';
import licMcafee from '../assets/products/lic-mcafee.svg';
import licOffice from '../assets/products/lic-office.svg';
import cartuchoNegro from '../assets/products/accesorios.jpg'; // real: cartucho HP
import cartuchoColor from '../assets/products/accesorios.jpg'; // real: cartucho HP color
import camaraIP from '../assets/products/camara.jpg'; // real: cámara Hikvision IP
import lectorCodigo from '../assets/products/accesorios.jpg'; // real: lector Honeywell
import kitVigilancia from '../assets/products/camara.jpg'; // real: kit CCTV
import allInOne from '../assets/products/laptop.webp'; // real: Lenovo All-in-One
import posQian from '../assets/products/pos-terminal.jpg'; // real: POS Qian

export type Category = 'pos' | 'seguridad' | 'computo' | 'accesorios' | 'licencias';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: number;
  image: string;
  specSheet?: string; // URL o ruta del PDF/hoja de especificaciones
  short: string;
  description: string;
  specs: string[];
  stock?: number; // Cantidad de piezas disponibles
}

export const CATEGORIES: { value: Category | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'pos', label: 'Sistemas POS' },
  { value: 'seguridad', label: 'Videovigilancia' },
  { value: 'computo', label: 'Cómputo' },
  { value: 'accesorios', label: 'Accesorios' },
  { value: 'licencias', label: 'Licencias' },
];

export const products: Product[] = [
  {
    id: 'pos-terminal-01',
    slug: 'terminal-pago-pos',
    name: 'Terminal Clip Total 3',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 4499,
    image: posTerminal,
    short: 'Cobra con tarjetas, QR y contactless.',
    description:
      'Terminal de pago con pantalla doble e impresora térmica integrada. Cobra con tarjetas, QR y contactless, controla tu inventario y consulta tus ventas desde la app. Ideal para negocios que quieren cobrar rápido y seguro.',
    specs: ['Pantalla doble', 'Impresora térmica integrada', 'Wi-Fi + Bluetooth', 'Tarjetas, QR y contactless'],
    featured: true,
  },
  {
    id: 'pos-tablet-02',
    slug: 'pos-tablet-smart',
    name: 'Kit POS con Tablet 10"',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 3950,
    image: posTablet,
    specSheet: '', // ← Hoja de especificaciones del kit POS con tablet
    short: 'Tablet, impresora, cajón y software incluidos.',
    description:
      'Kit completo de punto de venta con tablet Android de 10.1", base para mostrador, impresora térmica Bluetooth de 58 mm, cajón de dinero y software de POS en la nube con inventario y reportes de ventas. Listo para instalar en tu negocio el mismo día.',
    specs: ['Tablet Android 10.1"', 'Impresora térmica 58 mm', 'Cajón de dinero incluido', 'Software POS en la nube'],
    featured: true,
  },
  {
    id: 'pos-caja-03',
    slug: 'caja-registradora',
    name: 'Estación de Cobro POSline 15"',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 15439,
    image: caja,
    specSheet: '', // ← Hoja de especificaciones de la estación de cobro
    short: 'Pantalla táctil todo en uno para tu caja.',
    description:
      'Terminal de punto de venta todo en uno con pantalla táctil de 15 pulgadas, procesador Intel Celeron J1900 y SSD rápido. Se conecta con escáner, báscula e impresora de tickets para un control total de caja y arqueos.',
    specs: ['Pantalla táctil 15"', 'Intel Celeron J1900 · 4 GB RAM', 'SSD 128 GB', 'Conexión para escáner y báscula'],
  },
  {
    id: 'seg-camara-04',
    slug: 'camara-dome-4mp',
    name: 'Cámara Dome Hikvision 4MP',
    category: 'seguridad',
    categoryLabel: 'Videovigilancia',
    price: 2784,
    image: camaraDomo,
    specSheet: '', // ← Hoja de especificaciones de la cámara Hikvision
    short: 'Videovigilancia HD con visión nocturna.',
    description:
      'Cámara dome Hikvision DS-2CD2143G2 de 4MP con visión nocturna de 30 m, resistente a vandalismo (IP67/IK10), alimentación PoE y compresión H.265+. Compatible con grabadores NVR y con acceso desde el celular vía Hik-Connect.',
    specs: ['Resolución 4MP (2688×1520)', 'Visión nocturna IR 30 m', 'IP67 · IK10 · PoE', 'AcuSense + H.265+'],
    featured: true,
  },
  {
    id: 'comp-laptop-05',
    slug: 'laptop-business-14',
    name: "Laptop Lenovo IdeaPad 3 15.6''",
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 8299,
    image: laptopBusiness,
    specSheet: '', // ← Hoja de especificaciones de la laptop Lenovo
    short: 'Rendimiento para el día a día de tu equipo.',
    description:
      'Laptop Lenovo IdeaPad 3 con procesador Intel Core i5, SSD de 512 GB y pantalla Full HD de 15.6 pulgadas. Delgada y ligera para oficina y gestión, con batería de todo el día. Preinstalamos tu software contable.',
    specs: ['Intel Core i5-1155G7', '8 GB RAM · SSD 512 GB', 'Pantalla 15.6" FHD', 'Windows 11 Home'],
  },
  {
    id: 'comp-ultrabook-06',
    slug: 'laptop-ultrabook-15',
    name: "Laptop Lenovo IdeaPad Slim 3 15.3''",
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 18869,
    image: laptopUltrabook,
    specSheet: '', // ← Hoja de especificaciones de la laptop ultrabook
    short: 'Más pantalla y potencia para diseñar.',
    description:
      'Laptop Lenovo IdeaPad Slim 3 con procesador AMD Ryzen 7, 16 GB de RAM y SSD NVMe de 512 GB. Su pantalla táctil Full HD de 15.3 pulgadas y su teclado numérico la hacen ideal para diseño, contabilidad y multitarea exigente.',
    specs: ['AMD Ryzen 7 7735HS', '16 GB RAM · SSD 512 GB', 'Pantalla 15.3" táctil', 'Windows 11'],
    featured: true,
  },
  {
    id: 'comp-gamer-07',
    slug: 'pc-gamer-starter',
    name: 'PC Gamer Starter + Monitor 23.8"',
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 18439,
    image: pcGamer,
    specSheet: '', // ← Agrega aquí la URL o ruta de la hoja de especificaciones (PDF)
    short: 'Combo gamer listo para jugar y transmitir.',
    description:
      'Equipo de escritorio gamer con procesador AMD Ryzen 5, tarjeta de video GeForce RTX 3050, 16 GB de RAM y SSD de 1 TB. Incluye monitor de 23.8" y teclado/mouse. Armado y probado por nosotros.',
    specs: ['AMD Ryzen 5 · RTX 3050', '16 GB RAM · SSD 1 TB', 'Monitor 23.8" incluido', 'Teclado y mouse incluidos'],
    featured: true,
  },
  {
    id: 'comp-gamer-08',
    slug: 'pc-gamer-pro',
    name: 'PC Gamer Pro RTX 4060',
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 19599,
    image: pcGamer,
    specSheet: '', // ← Hoja de especificaciones de la PC Gamer Pro
    short: 'Máximo rendimiento para gaming y streaming.',
    description:
      'Torre gamer de alto rendimiento con procesador AMD Ryzen 5 5500, tarjeta de video GeForce RTX 4060 de 8 GB, 32 GB de RAM y SSD NVMe de 1 TB. Refrigeración mejorada y lista para juegos AAA y streaming.',
    specs: ['Ryzen 5 5500 · RTX 4060 8 GB', '32 GB RAM · SSD 1 TB', 'Refrigeración mejorada', 'Windows 11 (opcional)'],
  },
  {
    id: 'acc-kit-09',
    slug: 'kit-teclado-mouse',
    name: 'Kit Teclado y Mouse Logitech MK270',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 806,
    image: kitPerifericos,
    specSheet: '', // ← Hoja de especificaciones del kit Logitech
    short: 'Ergonomía para trabajar sin descanso.',
    description:
      'Kit inalámbrico Logitech MK270 con teclado de perfil bajo y mouse ergonómico silencioso, con alcance extendido de 2.4 GHz, 8 teclas multimedia y batería de larga duración. Plug & play por USB.',
    specs: ['Inalámbrico 2.4 GHz', '8 teclas multimedia', 'Diseño ergonómico silencioso', 'Plug & play USB'],
  },
  {
    id: 'acc-mando-10',
    slug: 'mando-xbox-series',
    name: 'Mando Inalámbrico Xbox Series X/S',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 1499,
    image: mandoGaming,
    specSheet: '', // ← Hoja de especificaciones del mando Xbox
    short: 'Control oficial Xbox con Bluetooth.',
    description:
      'Mando inalámbrico Xbox Series X|S con diseño ergonómico, gatillos texturizados y conectividad Bluetooth. Juega en consola Xbox, PC y dispositivos móviles compatibles. Conecta hasta 1 control por cable/inalámbrico y usa el conector de 3.5 mm para auriculares.',
    specs: ['Bluetooth + USB-C', 'Compatible Xbox / PC / Móvil', 'Entrada 3.5 mm para auriculares', 'Hasta 40 h con 2 pilas AA'],
  },
  {
    id: 'lic-windows-11',
    slug: 'licencia-windows-11-pro',
    name: 'Licencia Windows 11 Pro',
    category: 'licencias',
    categoryLabel: 'Licencias',
    price: 2499,
    image: licWindows,
    specSheet: '', // ← Hoja de especificaciones de la licencia Windows
    short: 'Licencia digital original de por vida.',
    description:
      'Licencia digital original de Windows 11 Pro con activación en línea y entrega inmediata por correo. Ideal para equipos nuevos o actualización de Windows 10. Incluye asistencia de instalación por nuestro equipo.',
    specs: ['100% original y vitalicia', 'Activación en línea', 'Entrega inmediata por correo', 'Soporte de instalación incluido'],
    featured: true,
  },
  {
    id: 'lic-office-pack-12',
    slug: 'pack-windows-office',
    name: 'Pack Windows 11 Pro + Office 2024',
    category: 'licencias',
    categoryLabel: 'Licencias',
    price: 3499,
    image: licPack,
    specSheet: '', // ← Hoja de especificaciones del pack de licencias
    short: 'Sistema operativo + ofimática en un pack.',
    description:
      'Pack de licencias digitales originales: Windows 11 Pro + Microsoft Office 2024 Professional. Todo lo que tu equipo necesita para trabajar desde el primer día, con entrega inmediata e instalación asistida.',
    specs: ['Windows 11 Pro + Office 2024', 'Licencias originales vitalicias', '1 PC · entrega inmediata', 'Instalación asistida incluida'],
    featured: true,
  },
  {
    id: 'lic-eset-13',
    slug: 'eset-nod32-antivirus',
    name: 'ESET NOD32 Antivirus · 1 año',
    category: 'licencias',
    categoryLabel: 'Licencias',
    price: 649,
    image: licEset,
    specSheet: '', // ← Hoja de especificaciones de ESET NOD32
    short: 'Protección ligera y premiada por 1 año.',
    description:
      'Licencia original de ESET NOD32 Antivirus por 1 año para 1 dispositivo. Protección rápida y ligera contra virus, ransomware y phishing, sin alentar tu equipo. Entrega digital inmediata.',
    specs: ['1 año · 1 dispositivo', 'Antivirus + antiphishing', 'Protección ransomware', 'Entrega digital inmediata'],
  },
  {
    id: 'lic-mcafee-14',
    slug: 'mcafee-total-protection',
    name: 'McAfee Total Protection · 10 dispositivos',
    category: 'licencias',
    categoryLabel: 'Licencias',
    price: 799,
    image: licMcafee,
    specSheet: '', // ← Hoja de especificaciones de McAfee
    short: 'Protege hasta 10 dispositivos por 1 año.',
    description:
      'Licencia original de McAfee Total Protection por 1 año para hasta 10 dispositivos: PC, Mac, Android e iOS. Antivirus, VPN segura, gestor de contraseñas y protección de identidad en un solo plan.',
    specs: ['1 año · hasta 10 dispositivos', 'Antivirus + VPN + gestor de claves', 'PC, Mac, Android e iOS', 'Entrega digital inmediata'],
  },
  {
    id: 'lic-office-15',
    slug: 'licencia-office-2024',
    name: 'Licencia Office 2024 Professional',
    category: 'licencias',
    categoryLabel: 'Licencias',
    price: 350,
    image: licOffice,
    specSheet: '', // ← Hoja de especificaciones de Office 2024
    short: 'Word, Excel y PowerPoint originales.',
    description:
      'Licencia digital original de Microsoft Office 2024 Professional para 1 PC: Word, Excel, PowerPoint, Outlook y más. Activación en línea con entrega inmediata por correo e instalación asistida por nuestro equipo.',
    specs: ['100% original y vitalicia', '1 PC · activación en línea', 'Entrega inmediata por correo', 'Instalación asistida incluida'],
    featured: true,
  },
  {
    id: 'acc-cartucho-16',
    slug: 'cartucho-hp-662xl-negro',
    name: 'Cartucho HP 662XL Negro Original',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 539,
    image: cartuchoNegro,
    specSheet: '',
    short: 'Cartucho negro original HP, rendimiento hasta 360 páginas.',
    description: 'Cartucho de tinta negro original HP 662XL de alto rendimiento. Imprime hasta 360 páginas con calidad profesional y colores vibrantes. Compatible con impresoras HP seleccionadas. Garantía original HP.',
    specs: ['Color: Negro', 'Rendimiento: hasta 360 páginas', 'Original HP', 'Tinta de alta calidad'],
  },
  {
    id: 'acc-cartucho-17',
    slug: 'cartucho-hp-667xl-tricolor',
    name: 'Cartucho HP 667XL Tricolor Original',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 679,
    image: cartuchoColor,
    specSheet: '',
    short: 'Cartucho tricolor original HP, rendimiento hasta 330 páginas.',
    description: 'Cartucho de tinta tricolor original HP 667XL de alto rendimiento. Imprime hasta 330 páginas a color con calidad profesional. Compatible con impresoras HP seleccionadas. Garantía original HP.',
    specs: ['Color: Tricolor (CMY)', 'Rendimiento: hasta 330 páginas', 'Original HP', 'Tinta de alta calidad'],
  },
  {
    id: 'seg-camara-18',
    slug: 'camara-hikvision-ip-torreta',
    name: 'Hikvision Cámara de Seguridad IP Torreta para Exteriores DS-2CD1327G3-LIUF',
    category: 'seguridad',
    categoryLabel: 'Videovigilancia',
    price: 1809,
    image: camaraIP,
    specSheet: '',
    short: 'Cámara IP torreta para exteriores, Full HD 1080p, alámbrica.',
    description: 'Cámara de seguridad IP Hikvision modelo DS-2CD1327G3-LIUF diseñada para exteriores. Resolución Full HD 1920x1080, conexión alámbrica, visión nocturna y diseño resistente a la intemperie. Ideal para vigilancia de perímetros y accesos.',
    specs: ['Resolución: 1920x1080 Full HD', 'Tipo: Torreta para exteriores', 'Conexión: Alámbrica (PoE)', 'Marca: Hikvision', 'Visión nocturna incluida'],
  },
  {
    id: 'acc-lector-19',
    slug: 'lector-honeywell-1250g',
    name: 'Honeywell Voyager 1250G Lector de Código de Barras Láser, 1D',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 1229,
    image: lectorCodigo,
    specSheet: '',
    short: 'Lector láser 1D con cable USB y base incluida.',
    description: 'Lector de código de barras láser Honeywell Voyager 1250G para códigos 1D. Incluye cable USB y base de soporte. Lectura rápida y precisa, ideal para puntos de venta, inventarios y almacenes. Plug-and-play, sin configuración compleja.',
    specs: ['Tipo: Láser 1D', 'Conectividad: USB', 'Incluye: Cable USB y base', 'Marca: Honeywell', 'Plug-and-play'],
  },
  {
    id: 'seg-kit-20',
    slug: 'kit-vigilancia-dh-kit-4-camaras',
    name: 'Kit de Vigilancia DH-KIT/XVR1B04-I/T/4-B1A21N-U-IL-A-0280B de 4 Cámaras CCTV Bullet con Grabadora de 4 Canales',
    category: 'seguridad',
    categoryLabel: 'Videovigilancia',
    price: 2409,
    image: kitVigilancia,
    specSheet: '',
    short: 'Kit de 4 cámaras CCTV bullet con grabadora de 4 canales.',
    description: 'Kit completo de videovigilancia con 4 cámaras bullet y grabadora DVR de 4 canales. Ideal para hogares, negocios y oficinas que necesitan monitoreo continuo. Incluye todo lo necesario para instalación inmediata.',
    specs: ['4 cámaras CCTV bullet', 'Grabadora de 4 canales', 'Sistema DH-KIT/XVR1B04', 'Instalación inmediata', 'Monitoreo continuo'],
  },
  {
    id: 'comp-allinone-21',
    slug: 'lenovo-thinkcentre-neo-50a-24-gen5',
    name: 'Lenovo ThinkCentre neo 50a 24 Gen 5 All-in-One 23.8", Intel Core 5 210H, 16GB, 512GB SSD, Windows 11 Pro',
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 20279,
    image: allInOne,
    specSheet: '',
    short: 'Computadora todo en uno de 23.8" con Intel Core 5, 16GB RAM y SSD 512GB.',
    description: 'Computadora All-in-One Lenovo ThinkCentre neo 50a 24 Gen 5 con pantalla de 23.8", procesador Intel Core 5 210H, 16 GB de memoria RAM, SSD de 512 GB y Windows 11 Pro preinstalado. Diseño compacto y elegante ideal para oficinas y espacios de trabajo.',
    specs: ['Pantalla: 23.8" All-in-One', 'Procesador: Intel Core 5 210H', 'RAM: 16 GB', 'Almacenamiento: SSD 512 GB', 'Sistema: Windows 11 Pro'],
  },
  {
    id: 'pos-qian-22',
    slug: 'pos-qian-qos-a09tc-01',
    name: 'Qian Sistema POS QOS-A09TC-01 15.6", RK3568 2GHz, 2GB, 16GB, Android 11',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 9629,
    image: posQian,
    specSheet: '',
    short: 'Terminal POS Android 11 de 15.6" con procesador RK3568.',
    description: 'Sistema de punto de venta Qian QOS-A09TC-01 con pantalla táctil de 15.6", procesador RK3568 de 2 GHz, 2 GB de RAM, 16 GB de almacenamiento y sistema Android 11. Terminal lista para usar en comercios, restaurantes y tiendas.',
    specs: ['Pantalla: 15.6" táctil', 'Procesador: RK3568 2 GHz', 'RAM: 2 GB', 'Almacenamiento: 16 GB', 'Sistema: Android 11'],
  },
  {
    id: 'sol-pos-paquete',
    slug: 'paquete-pos-completo',
    name: 'Paquete Punto de Venta Completo',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 12999,
    image: posTablet,
    short: 'Terminal, software, impresora y cajón listos para operar.',
    description:
      'Paquete completo de punto de venta que incluye terminal con tablet, impresora térmica, cajón de dinero y software de inventario, facturación y reportes. Listo para instalar en tu negocio el mismo día.',
    specs: ['Terminal con tablet 10"', 'Impresora térmica 58mm', 'Cajón de dinero', 'Software POS en la nube', 'Instalación y capacitación incluida'],
    featured: true,
    stock: 5,
  },
  {
    id: 'sol-seg-paquete',
    slug: 'paquete-seguridad-perimetral',
    name: 'Paquete Seguridad Perimetral',
    category: 'seguridad',
    categoryLabel: 'Videovigilancia',
    price: 15999,
    image: camaraDomo,
    short: 'Cámaras IP, grabador NVR y monitoreo desde tu celular.',
    description:
      'Paquete completo de videovigilancia que incluye cámaras IP dome, grabador NVR de 4 canales, cableado estructurado y acceso remoto desde tu celular. Instalación certificada incluida.',
    specs: ['4 cámaras IP dome 4MP', 'Grabador NVR 4 canales', 'Cableado estructurado', 'Acceso remoto desde celular', 'Instalación certificada'],
    featured: true,
    stock: 3,
  },
  {
    id: 'sol-comp-paquete',
    slug: 'paquete-estaciones-trabajo',
    name: 'Paquete Estaciones de Trabajo',
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 24999,
    image: pcGamer,
    short: 'Laptops, PCs y red empresarial armados a tu medida.',
    description:
      'Paquete completo de estaciones de trabajo que incluye laptops o PCs de escritorio, armado gamer a medida, red Wi-Fi empresarial y cableado estructurado. Diseñado para tu negocio.',
    specs: ['Laptops o PCs a medida', 'Armado gamer personalizado', 'Red Wi-Fi empresarial', 'Cableado estructurado', 'Soporte mensual incluido'],
    featured: true,
    stock: 4,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
