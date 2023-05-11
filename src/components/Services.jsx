import "./css/Services.css"
import ServicesSplide from "./subcomponents/ServicesSplide"
import waveUp from "./Images/interface-images/waveUpG.svg"

function Services() {
  return (
    <section className="services-container">
      <img src={waveUp} alt="wave" id="services"/>

      <div className="services-info-container">
        <article className="services-info">
          <h3>Servicios</h3>
          <p>En Ideando Eventos y Marketing ponemos a su disposición todos nuestros servicios que son imprescindibles para que su evento se desarrolle sin ningún problema. Nos encargamos de todo lo necesario para que tu evento sea único y perfecto. Tú sólo tienes que imaginar tu evento ideal y nosotros lo haremos realidad con nuestros servicios.</p>
        </article>

        <ServicesSplide />
      </div>
      
    </section>
  )
}

export default Services