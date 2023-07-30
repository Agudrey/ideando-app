import "./css/HowWork.css"
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiParty } from 'react-icons/bi';
import { HiOutlineSpeakerphone, HiOutlineBriefcase } from 'react-icons/hi';
import waveDown from "./Images/interface-images/waveDownG.svg"
import logo from "./Images/interface-images/circle-logo.webp"


function HowWork() {
  return (
    <section className="how-work-container" id="howWork">
      <img src={logo} alt="logo" className="background-logo up-logo"/>

      <article className="how-work-info">
        <h3>Cómo Trabajamos</h3>

        <ul>
          <div>
            <HiOutlineBriefcase className="how-work-icon"/>
            <li>Ponemos a Disposición del cliente el equipo de trabajo para tu Evento.</li>
          </div>

          <div>
            <HiOutlineSpeakerphone className="how-work-icon"/>
            <li>Damos prioridad a la escucha y a las ideas del cliente.</li>
          </div>

          <div>
            <MdOutlineWorkspacePremium className="how-work-icon"/>
            <li>Ofrecemos servicios de calidad.</li>
          </div>

          <div>
            <FaRegMoneyBillAlt className="how-work-icon"/>
            <li>Sabemos que cada evento es único y para ello requiere de un presupuesto personalizado y conciso.</li>
          </div>

          <div>
            <BiParty className="how-work-icon"/>
            <li>Es importante para nosotros estar al detalle con el cliente, por eso gestionamos todas las fases del evento: <br /> - Pre-Evento <br /> - Evento <br /> - Post-Evento.</li>
          </div>
        </ul>
      </article>


          <div className="how-work-cards-container">
            <div className="how-work-cards">
              <h5>Objetivo definido</h5>
              <p>Nos encargamos de planificar, gestionar y controlar para que el evento alcance su propósito.</p>
            </div>
            <div className="how-work-cards">
              <h5>Presupuesto controlado</h5>
              <p>Nuestra gran oferta de servicios nos permite ajustarnos al presupuesto designado por tu empresa.</p>
            </div>
            <div className="how-work-cards">
              <h5>Espacio adecuado</h5>
              <p>Cada evento es único y por ello es importante encontrar el lugar apropiado para tu evento.</p>
            </div>
          </div>


      <img src={logo} alt="logo" className="background-logo down-logo"/>
      {/* <img src={waveDown} alt="wave" id="events"/> */}
    </section>
  )
}

export default HowWork