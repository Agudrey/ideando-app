import "./css/WorkTeam.css"
import Zoom from 'react-reveal/Zoom';

function WorkTeam() {
  return (
    <section className="work-team-container" id="workTeam" style={{backgroundImage: "url('./interface-images/work-team-image1.webp')"}}>
      <div className="work-team-background-color"></div>

      <article className="work-team-info">
        <Zoom>
          <h3>Equipo</h3>

          <p>En Ideando Eventos y Marketing encontraras un equipo profesional y comprometido lleno de ideas innovadoras para realizar su evento con las mejores tendencias actuales del mercado. Evidenciaras que nos preocupamos por el  bienestar tanto de nuestros colaboradores como de nuestros clientes, actuando así competitivamente para brindar un servicio personalizado y auténtico.</p>

          <p>Promovemos el crecimiento personal para que nuestros trabajadores adquieran habilidades que les ayuden a superar dificultades. Logrando la común unión de intereses y esfuerzos, la colaboración y la utilización de las habilidades, talentos, formación y experiencias de los integrantes del equipo con el compromiso de cada uno para ser honesto, respetuoso y sabiendo escuchar al otro son bases indispensables para trabajar como base del éxito o fracaso de la organización.</p>
        </Zoom>

        <Zoom cascade>
          <div className="frase">
            <p className="frase-text">IDEAMOS</p>
            <p className="frase-text">CREAMOS</p>
            <p className="frase-text">IMPACTAMOS</p>
          </div>
        </Zoom>
      </article>
    </section>
  )
}

export default WorkTeam