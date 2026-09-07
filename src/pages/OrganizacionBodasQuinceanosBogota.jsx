import LandingPageLayout from './LandingPageLayout';
import EventFlipCard from '../components/subcomponents/EventFlipCard';
import { EventsItems } from '../components/functions/EventsItems';
import { buildBreadcrumbSchema, buildServiceSchema, EVENT_TABS } from '../seo/siteConfig';
import '../components/subcomponents/css/EventsSplide.css';

const bodasQuinceanosEventIds = [13];
const bodasQuinceanosEvents = EventsItems.filter((item) =>
  bodasQuinceanosEventIds.includes(item.id)
);

function OrganizacionBodasQuinceanosBogota() {
  return (
    <LandingPageLayout
      title="Organización de Bodas y Fiestas de 15 Años en Bogotá | Ideando Eventos"
      description="Organizamos bodas y fiestas de 15 años en Bogotá con decoración, montaje y producción a la medida para que cada celebración sea inolvidable."
      path="/organizacion-de-bodas-y-quince-anos-bogota"
      schema={[
        buildServiceSchema({
          name: 'Organización de bodas y 15 años en Bogotá',
          description:
            'Organización de bodas y fiestas de 15 años en Bogotá con decoración, montaje y producción integral.',
          path: '/organizacion-de-bodas-y-quince-anos-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Organización de eventos Bogotá', path: '/organizacion-de-eventos-bogota' },
          {
            name: 'Bodas y 15 años Bogotá',
            path: '/organizacion-de-bodas-y-quince-anos-bogota',
          },
        ]),
      ]}
      heroTitle="Organización de Bodas y Fiestas de 15 Años en Bogotá"
      heroDescription="Hacemos realidad bodas y fiestas de 15 años en Bogotá con un acompañamiento cercano en cada detalle: decoración, montaje, catering y producción, para que tú y tu familia disfruten sin preocupaciones el día más importante."
      tabs={EVENT_TABS}
    >
      <section className="landing-content landing-content--first">
        <h2>Celebraciones de bodas y 15 años que organizamos</h2>
        <p className="landing-intro">
          Cuidamos cada detalle de tu celebración familiar en Bogotá, desde la decoración hasta la
          logística, para que puedas vivir el momento junto a tus seres queridos sin preocuparte
          por nada.
        </p>
        <div className="events_cards_container">
          {bodasQuinceanosEvents.map((item) => (
            <EventFlipCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </LandingPageLayout>
  );
}

export default OrganizacionBodasQuinceanosBogota;
