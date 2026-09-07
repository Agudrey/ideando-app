import LandingPageLayout from './LandingPageLayout';
import { buildBreadcrumbSchema, buildServiceSchema, SERVICE_TABS } from '../seo/siteConfig';
import { MdRestaurant, MdLocalBar, MdDinnerDining, MdEmojiFoodBeverage } from 'react-icons/md';

const cateringSection = [
  {
    id: 'catering-refrigerios',
    accent: true,
    title: 'Catering y Refrigerios para Eventos en Bogotá',
    intro:
      'Ofrecemos servicios de catering y refrigerios para eventos en Bogotá con opciones adaptadas a cada formato: almuerzos ejecutivos, cócteles, meriendas y cenas empresariales. Menús personalizados y servicio profesional para tu evento.',
    items: [
      {
        name: 'Refrigerios y Meriendas',
        icon: MdEmojiFoodBeverage,
        description:
          'Refrigerios, meriendas y snacks para conferencias, talleres y jornadas empresariales en Bogotá.',
      },
      {
        name: 'Almuerzos Ejecutivos',
        icon: MdRestaurant,
        description:
          'Menús ejecutivos y buffet para almuerzos de trabajo, lanzamientos y reuniones corporativas con servicio completo.',
      },
      {
        name: 'Cócteles y Pasabocas',
        icon: MdLocalBar,
        description:
          'Estaciones de cócteles, pasabocas gourmet y barras temáticas para networking y celebraciones empresariales.',
      },
      {
        name: 'Cenas Empresariales',
        icon: MdDinnerDining,
        description:
          'Cenas de gala, cenas de fin de año y eventos especiales con menú personalizado y servicio de mesa profesional.',
      },
    ],
  },
];

function CateringRefrigeriosBogota() {
  return (
    <LandingPageLayout
      title="Catering y Refrigerios para Eventos en Bogotá | Ideando Eventos"
      description="Catering y refrigerios para eventos en Bogotá: almuerzos ejecutivos, cócteles, meriendas y cenas empresariales con menús personalizados y servicio profesional."
      path="/catering-y-refrigerios-para-eventos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Catering y refrigerios para eventos en Bogotá',
          description:
            'Servicios de catering, almuerzos ejecutivos, cócteles, meriendas y cenas empresariales para eventos en Bogotá.',
          path: '/catering-y-refrigerios-para-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios para eventos Bogotá', path: '/servicios-para-eventos-bogota' },
          {
            name: 'Catering y refrigerios Bogotá',
            path: '/catering-y-refrigerios-para-eventos-bogota',
          },
        ]),
      ]}
      heroTitle="Catering y Refrigerios para Eventos en Bogotá"
      heroDescription="Complementa tu evento con opciones gastronómicas de calidad. Desde almuerzos ejecutivos y meriendas hasta cócteles y cenas empresariales, diseñamos menús que se adaptan a tu formato y presupuesto."
      tabs={SERVICE_TABS}
      sections={cateringSection}
    />
  );
}

export default CateringRefrigeriosBogota;
