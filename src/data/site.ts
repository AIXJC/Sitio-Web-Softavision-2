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
  {
    title: 'Mantenimiento de Consolas y Reparaciones',
    description:
      'Reparación y mantenimiento de consolas de videojuegos, equipos de cómputo y dispositivos electrónicos. Diagnóstico rápido y garantía por escrito.',
    icon: 'tools' as const,
  },
  {
    title: 'Instalación de Cámaras de Seguridad',
    description:
      'Instalación profesional de sistemas de videovigilancia: cámaras IP, NVR/DVR, cableado estructurado y acceso remoto desde tu celular.',
    icon: 'camera' as const,
  },
  {
    title: 'Atención Multicanal 24/7',
    description:
      'Escríbenos por WhatsApp, llámanos directamente o contáctanos por correo electrónico. Estamos disponibles los 365 días del año para soporte y cotizaciones.',
    icon: 'phone' as const,
  },
];

export interface Sector {
  title: string;
  description: string;
  icon: string;
  details: { label: string; text: string }[];
}

export const sectors: Sector[] = [
  {
    title: 'Restaurantes y Cafés',
    description: 'Autoservicio, mesas, comandas y reportes de caja.',
    icon: 'cup',
    details: [
      { label: 'Punto de venta', text: 'POS con comandas digitales por mesa o kiosco de autoservicio; envío directo a impresora de cocina y cierre de caja por turno.' },
      { label: 'Página web', text: 'Sitio con menú en línea, galería, ubicación y reservas de mesa desde el celular, integrado a tus redes sociales.' },
      { label: 'Inventario', text: 'Control de insumos con costo por receta (food cost), alertas de merma y de stock mínimo para no quedarte sin platillos.' },
      { label: 'Agenda', text: 'Reserva de mesas en línea con confirmación automática por WhatsApp y control de aforo por horario.' },
      { label: 'Pagos', text: 'Cobro en mostrador con tarjeta, QR y propina integrada al ticket; conciliación diaria automática desde el POS.' },
      { label: 'Videovigilancia', text: 'Cámaras en cocina, caja y salón con acceso remoto desde tu celular para supervisar operación y auditorías.' },
    ],
  },
  {
    title: 'Tiendas y Retail',
    description: 'Inventario, facturación y control de ventas en tiempo real.',
    icon: 'bag',
    details: [
      { label: 'Punto de venta', text: 'POS multisesión con códigos de barras, etiquetas de precio, descuentos por artículo y cortes de caja por vendedor.' },
      { label: 'Página web', text: 'Catálogo en línea con compra directa, envíos a domicilio y recogida en tienda, sincronizado con tu inventario.' },
      { label: 'Inventario', text: 'Inventario en tiempo real por sucursal, con transferencias entre tiendas, conteo cíclico y alertas de reposición.' },
      { label: 'Agenda', text: 'Citas para servicios de entrega, montaje o asesoría personalizada, con recordatorios automáticos al cliente.' },
      { label: 'Pagos', text: 'Terminales de tarjeta, contactless y meses sin intereses; todos los cobros quedan registrados en el sistema.' },
      { label: 'Videovigilancia', text: 'Cámaras en entrada, almacén y caja con detección de movimiento y revisión de grabaciones desde el celular.' },
    ],
  },
  {
    title: 'Farmacias',
    description: 'Gestión de lote, vencimientos y códigos de barras.',
    icon: 'cross',
    details: [
      { label: 'Punto de venta', text: 'POS con búsqueda por código de barras o principio activo, recetario y venta controlada con firma del cliente.' },
      { label: 'Página web', text: 'Sitio informativo con servicios, ubicación y consulta de disponibilidad de productos más vendidos.' },
      { label: 'Inventario', text: 'Control por lote y fecha de caducidad con alertas tempranas de vencimiento y reportes de movimiento de controlados.' },
      { label: 'Agenda', text: 'Reserva de citas para servicios de inyecciones, vacunación y medición de signos vitales.' },
      { label: 'Pagos', text: 'Cobro rápido en efectivo, tarjeta y QR con ticket fiscal y cierre de caja con arqueo por turno.' },
      { label: 'Videovigilancia', text: 'Cámaras en mostrador, almacén y área de controlados con grabación continua y acceso restringido.' },
    ],
  },
  {
    title: 'Abarrotes',
    description: 'Cobro rápido con báscula y escáner integrados.',
    icon: 'fruit',
    details: [
      { label: 'Punto de venta', text: 'POS ágil para alto volumen: escáner, báscula integrada, cobro rápido y reapertura de ticket en segundos.' },
      { label: 'Página web', text: 'Folleto digital con promociones de la semana y aviso de productos nuevos, optimizado para WhatsApp.' },
      { label: 'Inventario', text: 'Alertas de stock mínimo, compras sugeridas a proveedores y control de caducidad de productos perecederos.' },
      { label: 'Agenda', text: 'Programación de entregas a domicilio y rutas de reparto con lista de clientes frecuentes.' },
      { label: 'Pagos', text: 'Efectivo con cambio calculado, QR y pago en línea para pedidos a domicilio con confirmación automática.' },
      { label: 'Videovigilancia', text: 'Cámaras en pasillos, entrada y zona de caja con visión nocturna para vigilar tu negocio 24/7.' },
    ],
  },
  {
    title: 'Oficinas',
    description: 'Equipos, redes y soporte para tu equipo de trabajo.',
    icon: 'monitor',
    details: [
      { label: 'Punto de venta', text: 'Módulo de recepción y cobros por horas, sala o servicio, con control de accesos de visitantes.' },
      { label: 'Página web', text: 'Sitio corporativo con tu portafolio de servicios, formulario de contacto y blog para posicionarte en buscadores.' },
      { label: 'Inventario', text: 'Inventario de activos fijos: equipos, licencias y mobiliario con historial de mantenimiento por activo.' },
      { label: 'Agenda', text: 'Agenda corporativa de reuniones y citas de clientes con confirmaciones y recordatorios por correo.' },
      { label: 'Pagos', text: 'Cobro por transferencia o link de pago con comprobante automático y facturación electrónica integrada.' },
      { label: 'Videovigilancia', text: 'Cámaras en accesos y áreas comunes con control de ingreso por tarjeta o código para empleados.' },
    ],
  },
  {
    title: 'Hoteles y Salones',
    description: 'Agenda, pagos y videovigilancia integrada.',
    icon: 'key',
    details: [
      { label: 'Punto de venta', text: 'Recepción con cobro de habitaciones, servicios del spa o salón, consumibles y cortesía por cliente.' },
      { label: 'Página web', text: 'Reservas en línea con calendario de disponibilidad, galería del lugar y confirmación automática por correo.' },
      { label: 'Inventario', text: 'Control de insumos de limpieza, amenidades y productos de salón con alertas de consumo por unidad.' },
      { label: 'Agenda', text: 'Agenda de citas de clientes y ocupación de habitaciones o cabinas con bloqueo automático de horarios.' },
      { label: 'Pagos', text: 'Anticipo en línea al reservar y liquidación al finalizar la estancia o servicio, con múltiples formas de pago.' },
      { label: 'Videovigilancia', text: 'Cámaras en accesos, estacionamiento y áreas comunes con monitoreo remoto para la seguridad de tus huéspedes.' },
    ],
  },
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
