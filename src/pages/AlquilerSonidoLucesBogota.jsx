import LandingPageLayout from './LandingPageLayout';
import { buildBreadcrumbSchema, buildServiceSchema, SERVICE_TABS } from '../seo/siteConfig';
import { BsVolumeUpFill } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';
import { MdMicExternalOn, MdEngineering } from 'react-icons/md';

const sonidoLucesSection = [
  {
    id: 'alquiler-sonido-luces',
    accent: true,
    title: 'Alquiler de Equipos de Sonido y Luces en Bogotá',
    intro:
      'Contamos con alquiler de equipos de sonido y luces en Bogotá para eventos corporativos, presentaciones, conciertos y celebraciones. Incluimos técnico especializado para garantizar una producción audiovisual impecable.',
    items: [
      {
        name: 'Sonido profesional',
        icon: BsVolumeUpFill,
        description:
          'Consolas de audio, bocinas, amplificadores y sistemas PA para eventos de cualquier tamaño en Bogotá.',
      },
      {
        name: 'Micrófonos e interpretación',
        icon: MdMicExternalOn,
        description:
          'Micrófonos inalámbricos, de solapa y sistemas de interpretación simultánea para conferencias y congresos.',
      },
      {
        name: 'Iluminación escénica',
        icon: HiLightBulb,
        description:
          'Luces robóticas, LED, cabezales móviles e iluminación decorativa para escenarios y ambientación.',
      },
      {
        name: 'Técnico incluido',
        icon: MdEngineering,
        description:
          'Personal técnico especializado en operación de sonido e iluminación durante todo tu evento.',
      },
    ],
  },
];

function AlquilerSonidoLucesBogota() {
  return (
    <LandingPageLayout
      title="Alquiler de Sonido y Luces para Eventos en Bogotá | Ideando Eventos"
      description="Alquiler de equipos de sonido y luces en Bogotá para eventos corporativos. Sistemas PA, micrófonos, iluminación escénica y técnico especializado incluido."
      path="/alquiler-de-sonido-y-luces-para-eventos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Alquiler de equipos de sonido y luces en Bogotá',
          description:
            'Alquiler de equipos de sonido, micrófonos, iluminación escénica y técnico especializado para eventos en Bogotá.',
          path: '/alquiler-de-sonido-y-luces-para-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios para eventos Bogotá', path: '/servicios-para-eventos-bogota' },
          {
            name: 'Alquiler de sonido y luces Bogotá',
            path: '/alquiler-de-sonido-y-luces-para-eventos-bogota',
          },
        ]),
      ]}
      heroTitle="Alquiler de Equipos de Sonido y Luces en Bogotá"
      heroDescription="Producción audiovisual profesional para tu evento. Ofrecemos equipos de sonido, micrófonos, iluminación escénica y personal técnico especializado para garantizar una experiencia impecable."
      tabs={SERVICE_TABS}
      sections={sonidoLucesSection}
    />
  );
}

export default AlquilerSonidoLucesBogota;
