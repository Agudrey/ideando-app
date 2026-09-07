import LandingPageLayout from './LandingPageLayout';
import EventFlipCard from '../components/subcomponents/EventFlipCard';
import { EventsItems } from '../components/functions/EventsItems';
import { buildBreadcrumbSchema, buildServiceSchema, EVENT_TABS } from '../seo/siteConfig';
import '../components/subcomponents/css/EventsSplide.css';

const corporateEventIds = [1, 2, 5, 6, 10, 11];
const corporateEvents = EventsItems.filter((item) => corporateEventIds.includes(item.id));

function EventosCorporativosBogota() {
  return (
    <LandingPageLayout
      title="Eventos Corporativos en Bogotá | Organización Empresarial"
      description="Organizamos eventos corporativos en Bogotá: integración, lanzamientos, congresos, aniversarios, cócteles y fin de año. Producción integral para empresas."
      path="/eventos-corporativos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Eventos corporativos en Bogotá',
          description:
            'Organización de eventos corporativos y empresariales en Bogotá con logística, producción y catering.',
          path: '/eventos-corporativos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Organización de eventos Bogotá', path: '/organizacion-de-eventos-bogota' },
          { name: 'Eventos corporativos Bogotá', path: '/eventos-corporativos-bogota' },
        ]),
      ]}
      heroTitle="Eventos Corporativos en Bogotá"
      heroDescription="Diseñamos y ejecutamos eventos corporativos en Bogotá que fortalecen equipos, comunican estrategias y posicionan marcas. Desde eventos de integración hasta congresos, lanzamientos y celebraciones de fin de año, adaptamos cada propuesta a los objetivos de tu empresa."
      tabs={EVENT_TABS}
    >
      <section className="landing-content landing-content--first">
        <h2>Tipos de eventos corporativos y empresariales que organizamos</h2>
        <p className="landing-intro">
          Nuestro equipo planifica eventos empresariales en Bogotá con enfoque en resultados,
          presupuesto controlado y experiencias memorables para colaboradores, clientes e invitados.
        </p>
        <div className="events_cards_container">
          {corporateEvents.map((item) => (
            <EventFlipCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </LandingPageLayout>
  );
}

export default EventosCorporativosBogota;
