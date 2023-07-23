import "./css/UsInfoExperience.css"
import { RiMedalLine } from 'react-icons/ri';
import { BsFillPatchCheckFill } from 'react-icons/bs';


function UsInfoExperience() {

  const experiencePoints = [
    "Servicio de alta calidad",
    "Garantía de satisfacción del 100%",
    "Sistema de control de calidad",
    "Compromiso con los clientes",
    "Equipo altamente profesional"
  ]

  const clickScroll = (name) => {
    const element = document.getElementById(name);
    //si existe
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className="experience-container">
      <div className="info-experience-container">
        <div className="years-experience-container">
          <div>
            <RiMedalLine className="experience-icon"/>

            <h5 className="experience-years">8</h5>
            <p>Años de experiencia en el sector</p>
          </div>
          
          <ul className="experience-points">
            {experiencePoints.map((item) =>
              <div>
                <BsFillPatchCheckFill className="points-icons"/>
                <li>{item}</li>
              </div>
            )}
          </ul>
        </div>

        <article className="experience-description">
          <p>Ideando Eventos y Marketing es una Empresa que cuenta con la experiencia de más de 10 años en la organización integral de diseño, logística, producción e innovación corporativa para empresas. Garantizamos que las marcas cobren vida a través de actividades únicas, innovadoras y útiles para las empresas. Por ello te ofrecemos un equipo de trabajo apasionado, comprometido y profesional quienes son los encargados de cada detalle; Apostamos por el asesoramiento, la atención, la creatividad, el trabajo en equipo, el compromiso y  la responsabilidad de cada Evento.</p>
        </article>
      </div>

      <div className="experience-button-container">
        <button onClick={() => clickScroll("contact")}>Quiero Hacer un evento</button>
      </div>
    </section>
  )
}

export default UsInfoExperience