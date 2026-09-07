import LandingPageLayout from './LandingPageLayout';
import Events from '../components/Events';
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  EVENT_TABS,
} from '../seo/siteConfig';

function OrganizacionEventosBogota() {
  return (
    <LandingPageLayout
      title="Organización de Eventos en Bogotá | Ideando Eventos y Marketing"
      description="Empresa especializada en organización de eventos en Bogotá. Planificamos, producimos y ejecutamos eventos corporativos, empresariales y sociales con más de 8 años de experiencia."
      path="/organizacion-de-eventos-bogota"
      schema={[
        buildLocalBusinessSchema(),
        buildServiceSchema({
          name: 'Organización de eventos en Bogotá',
          description:
            'Servicio integral de organización de eventos en Bogotá para empresas y marcas.',
          path: '/organizacion-de-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Organización de eventos Bogotá', path: '/organizacion-de-eventos-bogota' },
        ]),
      ]}
      heroTitle="Organización de Eventos en Bogotá"
      heroDescription="Somos una agencia de eventos en Bogotá con más de 8 años de experiencia en diseño, logística, producción e innovación corporativa. Gestionamos cada detalle para que tu evento cumpla su objetivo, se ajuste a tu presupuesto y genere impacto real para tu marca o empresa."
      tabs={EVENT_TABS}
    >
      <Events />
    </LandingPageLayout>
  );
}

export default OrganizacionEventosBogota;
