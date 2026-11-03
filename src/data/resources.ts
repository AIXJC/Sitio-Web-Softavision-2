export interface Resource {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  external: boolean;
}

export const resources: Resource[] = [
  {
    id: 'office-herramientas',
    title: 'Herramientas de Office',
    description:
      'Descarga oficial de Microsoft Office 365 ProPlus (64 bits, inglés). Instalador directo para equipos de tu negocio.',
    href:
      'https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=O365ProPlusRetail&platform=x64&language=en-us&version=O16GA',
    icon: 'documents',
    external: true,
  },
  // TODO: reemplazar el href con el enlace real de descarga que proporcionaste.
  {
    id: 'profesional-2024-ltsc',
    title: 'Herramienta Profesional 2024 LTSC',
    description:
      'Herramientas y descargas oficiales para el entorno profesional LTSC 2024.',
    href:
      'https://c2rsetup.officeapps.live.com/c2r/download.aspx?ProductreleaseID=ProPlus2024Retail&platform=x64&language=ar-sa&version=O16GA',
    icon: 'documents',
    external: true,
  },
  {
    id: 'windows-11',
    title: 'Windows 11',
    description:
      'Imagen y herramientas de instalación para Windows 11. Recurso para despliegue en equipos del negocio.',
    href:
      'https://zerofs.link/f/gw3FQM2B1ATpc6GkxaAZ7HGQw77k0w3kZF8Q--0DyAEnDUA/',
    icon: 'documents',
    external: true,
  },
  {
    id: 'windows-server',
    title: 'Windows Server',
    description:
      'Imagen y herramientas de instalación para Windows Server. Recurso para despliegue en servidores del negocio.',
    href:
      'https://zerofs.link/f/05c8qM44G4NmsLf-zYhvkoxKn9bkL4pHpC60aZdvxz_CzPU/',
    icon: 'documents',
    external: true,
  },
  {
    id: 'windows-11-enterprise-ltsc-2024',
    title: 'Windows 11 Enterprise LTSC 2024',
    description:
      'Imagen de instalación de Windows 11 Enterprise LTSC 2024 para despliegue profesional en equipos del negocio.',
    href: 'https://buzzheavier.com/c28olzic82lc',
    icon: 'documents',
    external: true,
  },
];