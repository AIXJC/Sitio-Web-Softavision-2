import posTerminal from '../assets/products/pos-terminal.jpg';
import posTablet from '../assets/products/pos-tablet.jpg';
import caja from '../assets/products/cashier.jpg'; // real: estación de cobro / caja
import camaraDomo from '../assets/products/camara.jpg'; // real: cámara dome en poste
import laptopBusiness from '../assets/products/laptop.webp'; // real: laptop plateada
import kitPerifericos from '../assets/products/accesorios.jpg'; // real: teclado + mouse
import mandoGaming from '../assets/products/control.jpg'; // real: mando Xbox
import pcGamer from '../../assets/aigc/images/prod-computadora_1791430981_000.png';
import pcGamerCombo from '../assets/products/cashier.webp'; // real: PC gamer con monitor
import laptopUltrabook from '../../assets/aigc/images/prod-laptop_1791430976_000.png';

export type Category = 'pos' | 'seguridad' | 'computo' | 'accesorios';

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
];

export const products: Product[] = [
  {
    id: 'pos-terminal-01',
    slug: 'terminal-pago-pos',
    name: 'Terminal de Pago POS',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 6900,
    image: posTerminal,
    short: 'Cobra con tarjetas, QR y contactless.',
    description:
      'Terminal de punto de venta todo en uno con impresión térmica, lector de tarjetas y conexión 4G/Wi-Fi. Ideal para negocios que quieren cobrar rápido y seguro.',
    specs: ['Pantalla táctil HD', 'Impresora térmica integrada', 'Wi-Fi + 4G', 'Batería de larga duración'],
    featured: true,
  },
  {
    id: 'pos-tablet-02',
    slug: 'pos-tablet-smart',
    name: 'POS Tablet Smart',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 9900,
    image: posTablet,
    short: 'Gestiona tu negocio desde una tablet.',
    description:
      'Sistema POS sobre tablet con software de inventario, facturación y reportes de ventas en tiempo real. Se adapta a restaurantes, tiendas y cafés.',
    specs: ['Software de inventario', 'Lector de códigos', 'Reportes en la nube', 'Multi-usuario'],
    featured: true,
  },
  {
    id: 'pos-caja-03',
    slug: 'caja-registradora',
    name: 'Caja Registradora Electrónica',
    category: 'pos',
    categoryLabel: 'Sistemas POS',
    price: 5900,
    image: caja,
    short: 'Cobro ágil con control de caja y arqueo.',
    description:
      'Caja registradora con pantalla operador y cliente, control de arqueos, cajón de dinero y conexión con escáner y báscula.',
    specs: ['Doble pantalla', 'Cajón monedero', 'Conexión USB', 'Arqueo de caja'],
  },
  {
    id: 'seg-camara-04',
    slug: 'camara-dome-4mp',
    name: 'Cámara de Seguridad Dome 4MP',
    category: 'seguridad',
    categoryLabel: 'Videovigilancia',
    price: 1290,
    image: camaraDomo,
    short: 'Videovigilancia HD con visión nocturna.',
    description:
      'Cámara dome con visión nocturna, resistente a vandalismo, compatible con grabadores NVR y acceso desde el celular.',
    specs: ['Resolución 4MP', 'Visión nocturna 30 m', 'IP67 resistente', 'Acceso desde app'],
    featured: true,
  },
  {
    id: 'comp-laptop-05',
    slug: 'laptop-business-14',
    name: "Laptop Business 14''",
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 14900,
    image: laptopBusiness,
    short: 'Rendimiento para el día a día de tu equipo.',
    description:
      'Laptop delgada y ligera para oficina y gestión, con SSD rápido y batería de todo el día. Preinstalamos tu software contable.',
    specs: ['SSD 512 GB', '16 GB RAM', 'Pantalla 14"', 'Windows 11 Pro'],
  },
  {
    id: 'comp-ultrabook-06',
    slug: 'laptop-ultrabook-15',
    name: "Laptop Ultrabook 15''",
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 18900,
    image: laptopUltrabook,
    short: 'Más pantalla y potencia para diseñar.',
    description:
      'Ultrabook con pantalla Full HD de 15 pulgadas, ideal para diseño, contabilidad y multitarea exigente.',
    specs: ['Full HD IPS', 'Procesador i5', 'SSD NVMe', 'Teclado numérico'],
    featured: true,
  },
  {
    id: 'comp-gamer-07',
    slug: 'pc-gamer-starter',
    name: 'PC Gamer Starter + Monitor',
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 17900,
    image: pcGamerCombo,
    short: 'Combo gamer listo para jugar y transmitir.',
    description:
      'Equipo de escritorio gamer con iluminación RGB, tarjeta de video dedicada y monitor incluido. Armado y probado por nosotros.',
    specs: ['GPU dedicada', '16 GB RAM DDR4', 'Monitor 24" 144Hz', 'Windows 11'],
    featured: true,
  },
  {
    id: 'comp-gamer-08',
    slug: 'pc-gamer-pro',
    name: 'PC Gamer Pro + Monitor',
    category: 'computo',
    categoryLabel: 'Cómputo',
    price: 24900,
    image: pcGamer,
    short: 'Máximo rendimiento para gaming y streaming.',
    description:
      'Torre gamer de alto rendimiento con tarjeta de video de gama media-alta, refrigeración mejorada y monitor gamer incluido.',
    specs: ['GPU gama media-alta', 'SSD 1 TB', 'RGB liquid cooling', 'Monitor gamer 27"'],
  },
  {
    id: 'acc-kit-09',
    slug: 'kit-teclado-mouse',
    name: 'Kit Teclado y Mouse',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 990,
    image: kitPerifericos,
    short: 'Ergonomía para trabajar sin descanso.',
    description:
      'Kit inalámbrico con teclado de perfil bajo y mouse ergonómico de silencio, con alcance extendido y batería de larga duración.',
    specs: ['Inalámbrico 2.4 GHz', 'Botones silenciosos', 'Diseño ergonómico', 'Plug & play'],
  },
  {
    id: 'acc-mando-10',
    slug: 'mando-gaming-inalambrico',
    name: 'Mando Gaming Inalámbrico',
    category: 'accesorios',
    categoryLabel: 'Accesorios',
    price: 1590,
    image: mandoGaming,
    short: 'Control gamer con respuesta precisa.',
    description:
      'Mando inalámbrico compatible con PC y consolas, con gatillos hápticos y agarre antideslizante para sesiones largas.',
    specs: ['Bluetooth + USB', 'Vibración háptica', 'Batería recargable', 'Compatible PC/Consola'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
