import LandingPageLayout from './LandingPageLayout';
import Services from '../components/Services';
import { buildBreadcrumbSchema, buildServiceSchema, SERVICE_TABS } from '../seo/siteConfig';

function ServiciosParaEventosBogota() {
  return (
    <LandingPageLayout
      title="Servicios para Eventos en Bogotá | Ideando Eventos y Marketing"
      description="Servicios integrales para eventos en Bogotá: logística, producción, mobiliario, sonido, luces y catering. Soluciones completas para eventos corporativos y empresariales."
      path="/servicios-para-eventos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Servicios para eventos en Bogotá',
          description:
            'Servicios integrales de logística y producción para eventos empresariales en Bogotá.',
          path: '/servicios-para-eventos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Organización de eventos Bogotá', path: '/organizacion-de-eventos-bogota' },
          { name: 'Servicios para eventos Bogotá', path: '/servicios-para-eventos-bogota' },
        ]),
      ]}
      heroTitle="Servicios para la Organización de Eventos en Bogotá"
      heroDescription="Ponemos a tu disposición todos los servicios imprescindibles para que tu evento en Bogotá se desarrolle sin contratiempos. Nos encargamos de la logística, producción y ejecución para que tú solo imagines la experiencia ideal."
      tabs={SERVICE_TABS}
    >
      <Services />
    </LandingPageLayout>
  );
}

export default ServiciosParaEventosBogota;
