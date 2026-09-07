import LandingPageLayout from './LandingPageLayout';
import EventFlipCard from '../components/subcomponents/EventFlipCard';
import { EventsItems } from '../components/functions/EventsItems';
import { buildBreadcrumbSchema, buildServiceSchema, EVENT_TABS } from '../seo/siteConfig';
import '../components/subcomponents/css/EventsSplide.css';

const brandingEventIds = [9, 12];
const brandingEvents = EventsItems.filter((item) => brandingEventIds.includes(item.id));

function BrandingActivacionesMarcaBogota() {
  return (
    <LandingPageLayout
      title="Branding y Activaciones de Marca en Bogotá | Ideando Eventos"
      description="Organizamos eventos de branding y activaciones de marca en Bogotá: lanzamientos de producto y cócteles empresariales que fortalecen el posicionamiento de tu marca."
      path="/branding-y-activaciones-de-marca-bogota"
      schema={[
        buildServiceSchema({
          name: 'Branding y activaciones de marca en Bogotá',
          description:
            'Organización de eventos de branding y activaciones de marca en Bogotá, incluyendo lanzamientos de producto y cócteles empresariales.',
          path: '/branding-y-activaciones-de-marca-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Organización de eventos Bogotá', path: '/organizacion-de-eventos-bogota' },
          {
            name: 'Branding y activaciones de marca Bogotá',
            path: '/branding-y-activaciones-de-marca-bogota',
          },
        ]),
      ]}
      heroTitle="Branding y Activaciones de Marca en Bogotá"
      heroDescription="Creamos experiencias de branding y activaciones de marca en Bogotá que conectan a tu empresa con su público objetivo. Desde lanzamientos de producto hasta cócteles empresariales, diseñamos eventos que fortalecen el posicionamiento y la recordación de tu marca."
      tabs={EVENT_TABS}
    >
      <section className="landing-content landing-content--first">
        <h2>Eventos de branding y activaciones de marca que organizamos</h2>
        <p className="landing-intro">
          Diseñamos experiencias estratégicas que posicionan tu marca en la mente de clientes,
          aliados e inversionistas, combinando creatividad, producción y logística de alto nivel.
        </p>
        <div className="events_cards_container">
          {brandingEvents.map((item) => (
            <EventFlipCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </LandingPageLayout>
  );
}

export default BrandingActivacionesMarcaBogota;
