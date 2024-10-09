import "./css/Events.css"
import EventsSplide from "./subcomponents/EventsSplide"
import Zoom from 'react-reveal/Zoom';

function Events() {
  return (
    <section className="events-container" id="events">

      <article className="events-info">
        <Zoom cascade>
          <article>
            <h3>Eventos</h3>
            <p>Conoce los diferentes eventos que podemos planificar para tu Marca o Empresa:</p>
          </article>
        </Zoom>
      </article>

      <EventsSplide />
    </section>
  )
}

export default Events