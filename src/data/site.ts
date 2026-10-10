import posTerminal from '../assets/products/pos-terminal.jpg';
import camaraDomo from '../assets/products/camara.jpg';
import pcGamer from '../../assets/aigc/images/prod-computadora_1791430981_000.png';
import laptopUltrabook from '../../assets/aigc/images/prod-laptop_1791430976_000.png';

export const stats = [
  { value: 8, suffix: '+', label: 'Años de experiencia' },
  { value: 450, suffix: '+', label: 'Negocios equipados' },
  { value: 1200, suffix: '+', label: 'Equipos instalados' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
];

export const services = [
  {
    title: 'Sistemas POS',
    description:
      'Puntos de venta completos: terminales, cajas, tablets y software de inventario, facturación y reportes.',
    icon: 'pos' as const,
  },
  {
    title: 'Videovigilancia',
    description:
      'Cámaras IP y analógicas, grabadores NVR/DVR, instalación certificada y monitoreo desde tu celular.',
    icon: 'camera' as const,
  },
  {
    title: 'Cómputo y Gaming',
    description:
      'Laptops, computadoras de escritorio y PCs gamer armadas a la medida de tu presupuesto.',
    icon: 'cpu' as const,
  },
  {
    title: 'Redes y Conectividad',
    description:
      'Diseño e instalación de redes cableadas e inalámbricas, Wi-Fi empresarial y cableado estructurado.',
    icon: 'network' as const,
  },
  {
    title: 'Soporte Técnico',
    description:
      'Mantenimiento preventivo y correctivo, soporte remoto y atención a domicilio para tu equipo.',
    icon: 'tools' as const,
  },
  {
    title: 'Licencias de Software',
    description:
      'Windows, Office y antivirus originales con entrega inmediata e instalación asistida.',
    icon: 'license' as const,
  },
  {
    title: 'Software a Medida',
    description:
      'Desarrollamos la solución digital que tu negocio necesita: sistemas de ventas, portales y automatizaciones.',
    icon: 'code' as const,
  },
];

export const sectors = [
  { title: 'Restaurantes y Cafés', description: 'Autoservicio, mesas, comandas y reportes de caja.' },
  { title: 'Tiendas y Retail', description: 'Inventario, facturación y control de ventas en tiempo real.' },
  { title: 'Farmacias', description: 'Gestión de lote, vencimientos y códigos de barras.' },
  { title: 'Abarrotes', description: 'Cobro rápido con báscula y escáner integrados.' },
  { title: 'Oficinas', description: 'Equipos, redes y soporte para tu equipo de trabajo.' },
  { title: 'Hoteeros y Salones', description: 'Agenda, pagos y videovigilancia integrada.' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Visitamos tu negocio o conocemos tu necesidad para proponer la solución exacta.',
  },
  {
    step: '02',
    title: 'Propuesta',
    description: 'Cotización clara con equipos, instalación, tiempos y garantía sin sorpresas.',
  },
  {
    step: '03',
    title: 'Instalación',
    description: 'Montaje, configuración y pruebas en sitio con personal capacitado.',
  },
  {
    step: '04',
    title: 'Soporte continuo',
    description: 'Acompañamiento, mantenimiento y actualizaciones para que nada se detenga.',
  },
];

export const projects = [
  {
    title: 'Cadena de minimercados',
    area: 'Sistemas POS + Videovigilancia',
    description: 'Instalación de 6 puntos de venta con cámaras IP y grabador en la nube.',
    image: posTerminal,
  },
  {
    title: 'Restaurante de comida rápida',
    area: 'POS con autoservicio',
    description: 'Kioscos de autoservicio, comandas digitales y control de inventario.',
    image: laptopUltrabook,
  },
  {
    title: 'Distribuidora de tecnología',
    area: 'Redes + Cómputo',
    description: 'Red Wi-Fi corporativa, 20 estaciones de trabajo y soporte mensual.',
    image: pcGamer,
  },
  {
    title: 'Consultorio médico',
    area: 'Videovigilancia',
    description: 'Sistema de cámaras dome con acceso remoto y grabación por 30 días.',
    image: camaraDomo,
  },
];

export const techStack = [
  'Windows Server',
  'Linux',
  'Mikrotik',
  'Cisco',
  'Hikvision',
  'Dahua',
  'React',
  'Node.js',
  'PostgreSQL',
  'Android POS',
  'Ubiquiti',
  'Synology',
];

export const whyUs = [
  {
    title: 'Soluciones integrales',
    description: 'Hardware, software, instalación y soporte con un solo proveedor.',
  },
  {
    title: 'Garantía respaldada',
    description: 'Productos con garantía y equipo técnico que responde rápido.',
  },
  {
    title: 'Acompañamiento real',
    description: 'Capacitamos a tu equipo para que aproveche al máximo cada equipo.',
  },
];
