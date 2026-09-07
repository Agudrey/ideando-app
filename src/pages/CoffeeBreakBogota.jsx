import LandingPageLayout from './LandingPageLayout';
import { buildBreadcrumbSchema, buildServiceSchema, SERVICE_TABS } from '../seo/siteConfig';
import { MdCoffee, MdLocalCafe, MdBakeryDining, MdRoomService } from 'react-icons/md';

const coffeeBreakSection = [
  {
    id: 'coffee-break',
    accent: true,
    title: 'Coffee Break y Estaciones de cafe para Eventos en Bogotá',
    intro:
      'Organizamos coffee breaks y estaciones de café para eventos en Bogotá con menús personalizados y servicio completo. Ideal para reuniones, capacitaciones, conferencias y jornadas corporativas que requieren un refrigerio de calidad.',
    items: [
      {
        name: 'Coffee Break Corporativo',
        icon: MdCoffee,
        description:
          'Menús de café, té, jugos y snacks para reuniones, capacitaciones y jornadas empresariales en Bogotá.',
      },
      {
        name: 'Estaciones de Café Premium',
        icon: MdLocalCafe,
        description:
          'Máquinas de café, barista y variedad de bebidas calientes para eventos corporativos y oficinas.',
      },
      {
        name: 'Snacks y Pasabocas',
        icon: MdBakeryDining,
        description:
          'Opciones dulces y saladas, saludables y gourmet, adaptadas a cualquier presupuesto y formato de evento.',
      },
      {
        name: 'Montaje y Servicio Incluido',
        icon: MdRoomService,
        description:
          'Personal de servicio, montaje de la estación, menaje y logística de entrega en cualquier zona de Bogotá.',
      },
    ],
  },
];

function CoffeeBreakBogota() {
  return (
    <LandingPageLayout
      title="Coffee Break para Eventos y Empresas en Bogotá | Ideando Eventos"
      description="Coffee break para empresas y eventos en Bogotá: estaciones de café premium, snacks, pasabocas y servicio completo para reuniones, conferencias y jornadas corporativas."
      path="/coffee-break-para-eventos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Coffee break para eventos y empresas en Bogotá',
          description:
            'Servicio de coffee break para empresas y eventos en Bogotá con estaciones de café, snacks y personal de servicio incluido.',
          path: '/coffee-break-para-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios para eventos Bogotá', path: '/servicios-para-eventos-bogota' },
          { name: 'Coffee Break Bogotá', path: '/coffee-break-para-eventos-bogota' },
        ]),
      ]}
      heroTitle="Coffee Break y Estaciones de cafe para Eventos en Bogotá"
      heroDescription="Ofrecemos coffee breaks y estaciones de café para eventos en Bogotá. Desde menús personalizados hasta snacks y pasabocas, diseñamos una experiencia gastronómica que complementa tus reuniones, capacitaciones y jornadas corporativas."
      tabs={SERVICE_TABS}
      sections={coffeeBreakSection}
    />
  );
}

export default CoffeeBreakBogota;
