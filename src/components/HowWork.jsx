import "./css/HowWork.css"
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiParty } from 'react-icons/bi';
import { HiOutlineSpeakerphone, HiOutlineBriefcase } from 'react-icons/hi';
import waveUp from "./Images/interface-images/waveUpP.svg"
import waveDown from "./Images/interface-images/waveDownG.svg"


function HowWork() {
  return (
    <section className="how-work-container" id="howWork">
      <img src={waveUp} alt="wave"/>

      <article className="how-work-info">
        <h3>Cómo Trabajamos</h3>
        <ul>
          <HiOutlineBriefcase className="how-work-icon"/>
          <li>Ponemos a Disposición del cliente el equipo de trabajo para su Evento.</li>

          <HiOutlineSpeakerphone className="how-work-icon"/>
          <li>Damos prioridad a la escucha, a los deseos del cliente para su evento y nosotros lo complementamos con nuevas ideas de acuerdo a sus necesidades y gustos.</li>

          <MdOutlineWorkspacePremium className="how-work-icon"/>
          <li>Ofrecemos servicios de calidad para su Evento.</li>

          <FaRegMoneyBillAlt className="how-work-icon"/>
          <li>Tenemos en cuenta que cada evento es único y para ello requiere de un presupuesto personalizado y conciso.</li>

          <BiParty className="how-work-icon"/>
          <li>Es importante para nosotros estar al detalle con el cliente, por eso gestionamos todas las fases del evento: Pre-Evento, Evento y Post-Evento.</li>
        </ul>
      </article>

      <img src={waveDown} alt="wave" id="events"/>
    </section>
  )
}

export default HowWork