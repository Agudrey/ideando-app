import "./css/UsInfo.css"
import UsInfoCard from "./subcomponents/UsInfoCard"
import UsInfoExperience from "./subcomponents/UsInfoExperience"


function UsInfo() {
  return (
    <section className="info-container" id="usInfo">
      <h1>¡Creamos el evento perfecto para ti!</h1>

      <UsInfoExperience />

      <UsInfoCard />
    </section>
  )
}


export default UsInfo