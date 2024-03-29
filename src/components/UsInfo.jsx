import "./css/UsInfo.css"
import UsInfoCard from "./subcomponents/UsInfoCard"
import UsInfoExperience from "./subcomponents/UsInfoExperience"
import UsInfoLine from "./subcomponents/UsInfoLine"
import Zoom from 'react-reveal/Zoom';

function UsInfo() {
  return (
    <section className="info-container" id="usInfo" style={{backgroundImage: `url('./interface-images/us-info-image.webp')`}}>
      <div className="info-container-background-color"></div>
      <h1>
        <Zoom cascade>
          ¡Creamos el evento perfecto para ti!
        </Zoom>
      </h1>

      <UsInfoExperience />

      <div className="info-container-cards">
        <UsInfoLine />
        <UsInfoCard />
      </div>
    </section>
  )
}


export default UsInfo