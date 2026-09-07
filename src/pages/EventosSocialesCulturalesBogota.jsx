import LandingPageLayout from './LandingPageLayout';
import EventFlipCard from '../components/subcomponents/EventFlipCard';
import { EventsItems } from '../components/functions/EventsItems';
import { buildBreadcrumbSchema, buildServiceSchema, EVENT_TABS } from '../seo/siteConfig';
import '../components/subcomponents/css/EventsSplide.css';

const socialEventIds = [3, 4, 5, 7, 8];
const socialEvents = EventsItems.filter((item) => socialEventIds.includes(item.id));

function EventosSocialesCulturalesBogota() {
  return (
    <LandingPageLayout
      title="Eventos Sociales y Culturales en Bogotá | Ideando Eventos"
      description="Organización de eventos sociales y culturales en Bogotá: beneficencia, ferias, eventos recreativos, híbridos y experiencias gastronómicas para empresas y comunidades."
      path="/eventos-sociales-y-culturales-bogota"
      schema={[
        buildServiceSchema({
          name: 'Eventos sociales y culturales en Bogotá',
          description:
            'Organización de eventos sociales, culturales y comunitarios en Bogotá con producción integral.',
          path: '/eventos-sociales-y-culturales-bogota',
        }),
        buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Organización de eventos Bogotá', path: '/organizacion-de-eventos-bogota' },
          {
            name: 'Eventos sociales y culturales Bogotá',
            path: '/eventos-sociales-y-culturales-bogota',
          },
        ]),
      ]}
      heroTitle="Eventos Sociales y Culturales en Bogotá"
      heroDescription="Creamos eventos sociales y culturales en Bogotá que conectan emocionalmente con el público. Desde ferias de emprendimiento y eventos de beneficencia hasta experiencias gastronómicas y formatos híbridos, diseñamos propuestas que generan impacto y recuerdo."
      tabs={EVENT_TABS}
    >
      <section className="landing-content landing-content--first">
        <h2>Eventos sociales y culturales que producimos en Bogotá</h2>
        <p className="landing-intro">
          Combinamos creatividad, logística y producción para eventos que promueven el esparcimiento,
          la cultura, la solidaridad y el vínculo con la comunidad en Bogotá.
        </p>
        <div className="events_cards_container">
          {socialEvents.map((item) => (
            <EventFlipCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </LandingPageLayout>
  );
}

export default EventosSocialesCulturalesBogota;
