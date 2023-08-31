import "./css/Services.css"
import ServicesSplide from "./subcomponents/ServicesSplide"
import ServicesCard from "./subcomponents/ServicesCard"
import Zoom from 'react-reveal/Zoom';

function Services() {
  return (
    <section className="services-container" id="services">
      <div className="services-info-container">
        <article className="services-info">
          <Zoom cascade>
            <h3>Servicios</h3>
            <p>En Ideando Eventos y Marketing ponemos a su disposición todos nuestros servicios que son imprescindibles para que su evento se desarrolle sin ningún problema. Nos encargamos de todo lo necesario para que tu evento sea único y perfecto. Tú sólo tienes que imaginar tu evento ideal y nosotros lo haremos realidad con nuestros servicios.</p>
          </Zoom>
        </article>

        <ServicesSplide />
        <ServicesCard />
      </div>
    </section>
  )
}

export default Services