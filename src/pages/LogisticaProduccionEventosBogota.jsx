import LandingPageLayout from './LandingPageLayout';
import { buildBreadcrumbSchema, buildServiceSchema, SERVICE_TABS } from '../seo/siteConfig';
import { MdEventNote, MdGroups, MdTheaterComedy, MdSupervisorAccount } from 'react-icons/md';

const logisticaSection = [
  {
    id: 'logistica-produccion',
    accent: true,
    title: 'Logística y Producción de Eventos en Bogotá',
    intro:
      'Ofrecemos logística y producción integral para eventos en Bogotá, coordinando cada etapa del proceso: planificación, proveedores, montaje y producción audiovisual. Nos encargamos de todos los detalles operativos para que tu evento se desarrolle sin contratiempos, desde la conceptualización hasta el cierre.',
    items: [
      {
        name: 'Planificación y Cronograma',
        icon: MdEventNote,
        description:
          'Diseñamos el cronograma detallado de tu evento, desde el montaje hasta el cierre, para que cada actividad se ejecute a tiempo.',
      },
      {
        name: 'Coordinación de Proveedores',
        icon: MdGroups,
        description:
          'Gestionamos y coordinamos todos los proveedores del evento (mobiliario, sonido, catering) para garantizar una ejecución sin contratiempos.',
      },
      {
        name: 'Producción y Escenografía',
        icon: MdTheaterComedy,
        description:
          'Diseño y montaje de escenografía, tarima y ambientación que dan vida al concepto creativo de tu evento en Bogotá.',
      },
      {
        name: 'Supervisión en Sitio',
        icon: MdSupervisorAccount,
        description:
          'Equipo de logística presente durante todo el evento, supervisando montaje, desarrollo y desmontaje para tu tranquilidad.',
      },
    ],
  },
];

function LogisticaProduccionEventosBogota() {
  return (
    <LandingPageLayout
      title="Logística y Producción de Eventos en Bogotá | Ideando Eventos"
      description="Logística y producción de eventos en Bogotá: planificación, coordinación de proveedores, montaje, escenografía y supervisión en sitio para garantizar el éxito de tu evento."
      path="/logistica-y-produccion-de-eventos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Logística y producción de eventos en Bogotá',
          description:
            'Servicio integral de logística y producción de eventos en Bogotá: planificación, coordinación de proveedores, montaje y supervisión en sitio.',
          path: '/logistica-y-produccion-de-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios para eventos Bogotá', path: '/servicios-para-eventos-bogota' },
          {
            name: 'Logística y producción Bogotá',
            path: '/logistica-y-produccion-de-eventos-bogota',
          },
        ]),
      ]}
      heroTitle="Logística y Producción de Eventos en Bogotá"
      heroDescription="Nos encargamos de la logística y producción integral de tu evento en Bogotá: planificación, coordinación de proveedores, montaje, producción audiovisual y supervisión en sitio, para que cada detalle salga exactamente como lo imaginaste."
      tabs={SERVICE_TABS}
      sections={logisticaSection}
    />
  );
}

export default LogisticaProduccionEventosBogota;
