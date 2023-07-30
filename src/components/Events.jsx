import "./css/Events.css"
import EventsSplide from "./subcomponents/EventsSplide"


function Events() {
  return (
    <section className="events-container" id="events">

      <article className="events-info">
        <h3>Eventos</h3>
        <p>Conoce los diferentes eventos que podemos planificar para tu Marca o Empresa:</p>
      </article>

      <EventsSplide />
    </section>
  )
}

export default Events