import "./css/HowWork.css"
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiParty } from 'react-icons/bi';
import { HiOutlineSpeakerphone, HiOutlineBriefcase } from 'react-icons/hi';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function HowWork() {
  return (
    <section className="how-work-container" id="howWork">
      <img src="./interface-images/circle-logo.webp" alt="logo" className="background-logo up-logo"/>

      <article className="how-work-info">
        <h3 className="how-work-title">
          <Zoom cascade>
            Cómo Trabajamos
          </Zoom>
        </h3>

        <Zoom cascade>
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
              <li>Es importante para nosotros estar al detalle con el cliente, por eso gestionamos todas las fases</li>
            </div>
          </ul>
        </Zoom>
      </article>

      <Zoom cascade>
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
      </Zoom>

      <img src="./interface-images/circle-logo.webp" alt="logo" className="background-logo down-logo"/>
    </section>
  )
}

export default HowWork