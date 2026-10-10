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

export type Category = 'pos' | 'seguridad' | 'computo' | 'accesorios' | 'licencias';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  categoryLabel: string;
  price: number;
  image: string;
  short: string;
  description: string;
  specs: string[];
  featured?: boolean;
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
    image: pcGamerCombo,
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
    short: 'Word, Excel y PowerPoint originales.',
    description:
      'Licencia digital original de Microsoft Office 2024 Professional para 1 PC: Word, Excel, PowerPoint, Outlook y más. Activación en línea con entrega inmediata por correo e instalación asistida por nuestro equipo.',
    specs: ['100% original y vitalicia', '1 PC · activación en línea', 'Entrega inmediata por correo', 'Instalación asistida incluida'],
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
