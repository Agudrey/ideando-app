import "./css/UsInfo.css"
import UsInfoCard from "./subcomponents/UsInfoCard"
import UsInfoExperience from "./subcomponents/UsInfoExperience"
import UsInfoLine from "./subcomponents/UsInfoLine"


function UsInfo() {
  return (
    <section className="info-container" id="usInfo" style={{backgroundImage: "url('./interface-images/us-info-image.webp') no-repeat center top / cover"}}>
      <div className="info-container-background-color"></div>
      <h1>¡Creamos el evento perfecto para ti!</h1>

      <UsInfoExperience />

      <div className="info-container-cards">
        <UsInfoLine />
        <UsInfoCard />
      </div>
    </section>
  )
}


export default UsInfo