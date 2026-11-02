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
];