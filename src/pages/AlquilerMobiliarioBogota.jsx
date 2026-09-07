import LandingPageLayout from './LandingPageLayout';
import { buildBreadcrumbSchema, buildServiceSchema, SERVICE_TABS } from '../seo/siteConfig';
import { TbChairDirector, TbArmchair } from 'react-icons/tb';
import { BsTruck } from 'react-icons/bs';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const mobiliarioSection = [
  {
    id: 'alquiler-mobiliario',
    accent: true,
    title: 'Alquiler de Mobiliario para Eventos en Bogotá',
    intro:
      'Ofrecemos alquiler de mobiliario para eventos en Bogotá con entrega, montaje y desmontaje incluidos. Disponemos de sillas, mesas, mobiliario lounge y piezas decorativas para conferencias, cócteles, ferias y eventos corporativos de cualquier escala.',
    items: [
      {
        name: 'Sillas y mesas',
        icon: TbChairDirector,
        description:
          'Sillas ejecutivas, plegables y mesas para conferencias, almuerzos empresariales y eventos de networking en Bogotá.',
      },
      {
        name: 'Mobiliario lounge',
        icon: TbArmchair,
        description:
          'Sofás, puff y mesas auxiliares para crear zonas de descanso y networking en tu evento.',
      },
      {
        name: 'Montaje y desmontaje',
        icon: HiOutlineWrenchScrewdriver,
        description:
          'Nuestro equipo se encarga del montaje, distribución y retiro del mobiliario en el lugar de tu evento.',
      },
      {
        name: 'Entrega en Bogotá',
        icon: BsTruck,
        description:
          'Coordinamos la logística de entrega y recogida del mobiliario en cualquier zona de Bogotá.',
      },
    ],
  },
];

function AlquilerMobiliarioBogota() {
  return (
    <LandingPageLayout
      title="Alquiler de Mobiliario para Eventos en Bogotá | Ideando Eventos"
      description="Alquiler de mobiliario para eventos en Bogotá: sillas, mesas, mobiliario lounge y piezas decorativas con entrega, montaje y desmontaje incluidos."
      path="/alquiler-de-mobiliario-para-eventos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Alquiler de mobiliario para eventos en Bogotá',
          description:
            'Alquiler de sillas, mesas, mobiliario lounge y piezas decorativas para eventos corporativos en Bogotá con montaje incluido.',
          path: '/alquiler-de-mobiliario-para-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios para eventos Bogotá', path: '/servicios-para-eventos-bogota' },
          {
            name: 'Alquiler de mobiliario Bogotá',
            path: '/alquiler-de-mobiliario-para-eventos-bogota',
          },
        ]),
      ]}
      heroTitle="Alquiler de Mobiliario para Eventos en Bogotá"
      heroDescription="Equipamos tu evento con mobiliario funcional y elegante. Desde sillas y mesas para conferencias hasta ambientaciones lounge, nos encargamos de la entrega, montaje y retiro en cualquier zona de Bogotá."
      tabs={SERVICE_TABS}
      sections={mobiliarioSection}
    />
  );
}

export default AlquilerMobiliarioBogota;
