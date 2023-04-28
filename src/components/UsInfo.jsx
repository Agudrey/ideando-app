import "./css/UsInfo.css"
import UsInfoCard from "./subcomponents/UsInfoCard"


function UsInfo() {
  return (
    <section className="info-container" id="usInfo">
      <article className="info">
        <h3>Nosotros</h3>
        <p className="info-description">Ideando Eventos y Marketing es una Empresa que cuenta con la experiencia de más de 7 años en la organización integral de diseño, logística y producción de eventos, por ello te ofrecemos los mejores organizadores quienes son los encargados de cada detalle; Apostamos por el asesoramiento, la atención, la creatividad, el trabajo en equipo y asumimos la responsabilidad de cada Evento. <br /> <br />Tenemos todo lo que necesita tu evento para ser un éxito:
        </p>
      </article>
      <UsInfoCard />
    </section>
  )
}


export default UsInfo