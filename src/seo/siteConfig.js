export const SITE_URL = 'https://ideandoeventosymarketing.com';
export const SITE_NAME = 'Ideando Eventos y Marketing';
export const PHONE_NUMBER = '3004252045';
export const PHONE_DISPLAY = '+57 300 425 2045';
export const EMAIL = 'contacto@ideandoeventosymarketing.com';

export const SOCIAL_LINKS = [
  'https://www.facebook.com/profile.php?id=100068967685536',
  'https://instagram.com/ideandoeventosymarketing',
  'https://www.youtube.com/@ideandoeventosymarketing6475',
  'https://www.linkedin.com/company/ideando-eventos-y-marketing/',
];

export const DEFAULT_OG_IMAGE = `${SITE_URL}/interface-images/us-info-image.webp`;

export const EVENT_TABS = [
  {
    path: '/organizacion-de-eventos-bogota',
    label: 'Todos los eventos',
  },
  {
    path: '/eventos-corporativos-bogota',
    label: 'Eventos corporativos',
  },
  {
    path: '/eventos-sociales-y-culturales-bogota',
    label: 'Eventos sociales y culturales',
  },
  {
    path: '/branding-y-activaciones-de-marca-bogota',
    label: 'Branding y Activaciones de Marca',
  },
  {
    path: '/organizacion-de-bodas-y-quince-anos-bogota',
    label: 'Bodas y 15 Años',
  },
];

export const SERVICE_TABS = [
  {
    path: '/servicios-para-eventos-bogota',
    label: 'Todos los servicios',
  },
  {
    path: '/alquiler-de-mobiliario-para-eventos-bogota',
    label: 'Alquiler de mobiliario',
  },
  {
    path: '/alquiler-de-sonido-y-luces-para-eventos-bogota',
    label: 'Sonido y luces',
  },
  {
    path: '/catering-y-refrigerios-para-eventos-bogota',
    label: 'Catering y refrigerios',
  },
  {
    path: '/coffee-break-para-eventos-bogota',
    label: 'Coffee Break',
  },
  {
    path: '/logistica-y-produccion-de-eventos-bogota',
    label: 'Logística y Producción',
  },
];

export const ROUTES = [
  '/',
  '/organizacion-de-eventos-bogota',
  '/eventos-corporativos-bogota',
  '/eventos-sociales-y-culturales-bogota',
  '/branding-y-activaciones-de-marca-bogota',
  '/organizacion-de-bodas-y-quince-anos-bogota',
  '/servicios-para-eventos-bogota',
  '/alquiler-de-mobiliario-para-eventos-bogota',
  '/alquiler-de-sonido-y-luces-para-eventos-bogota',
  '/catering-y-refrigerios-para-eventos-bogota',
  '/coffee-break-para-eventos-bogota',
  '/logistica-y-produccion-de-eventos-bogota',
];

export const NAV_PAGES = [
  {
    path: '/organizacion-de-eventos-bogota',
    label: 'Organización de Eventos',
  },
  {
    path: '/eventos-corporativos-bogota',
    label: 'Eventos Corporativos',
  },
  {
    path: '/eventos-sociales-y-culturales-bogota',
    label: 'Eventos Sociales',
  },
  {
    path: '/branding-y-activaciones-de-marca-bogota',
    label: 'Branding y Activaciones de Marca',
  },
  {
    path: '/organizacion-de-bodas-y-quince-anos-bogota',
    label: 'Bodas y 15 Años',
  },
  {
    path: '/servicios-para-eventos-bogota',
    label: 'Servicios',
  },
  {
    path: '/alquiler-de-mobiliario-para-eventos-bogota',
    label: 'Alquiler de Mobiliario',
  },
  {
    path: '/alquiler-de-sonido-y-luces-para-eventos-bogota',
    label: 'Sonido y Luces',
  },
  {
    path: '/catering-y-refrigerios-para-eventos-bogota',
    label: 'Catering y Refrigerios',
  },
  {
    path: '/coffee-break-para-eventos-bogota',
    label: 'Coffee Break',
  },
  {
    path: '/logistica-y-produccion-de-eventos-bogota',
    label: 'Logística y Producción',
  },
];

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description:
      'Agencia de organización de eventos en Bogotá especializada en eventos corporativos, empresariales y sociales.',
    url: SITE_URL,
    telephone: `+57-${PHONE_NUMBER.slice(0, 3)}-${PHONE_NUMBER.slice(3, 6)}-${PHONE_NUMBER.slice(6)}`,
    email: EMAIL,
    image: `${SITE_URL}/interface-images/logo.webp`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bogotá',
    },
    sameAs: SOCIAL_LINKS,
  };
}

export function buildServiceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bogotá',
    },
    url: `${SITE_URL}${path}`,
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
