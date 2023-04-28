import "./css/Contact.css"
import ContactForm from "./subcomponents/ContactForm"
import ContactLinks from "./subcomponents/ContactLinks"
import waveUp from "./Images/interface-images/waveUpP.svg"
import waveDown from "./Images/interface-images/waveDownG.svg"

function Contact() {
  return (
    <section className="services-container">
      <img src={waveUp} alt="wave" id="contact"/>

      <article className="contact-info">
        <h3>Contacto</h3>
        <p>Solicita una asesoria presencial o video llamada y cuéntanos de tu evento y recibe una cotización personalizada de acuerdo a tus necesidades y objetivos.</p>
      </article>

      <ContactForm />

      <ContactLinks />

      <img src={waveDown} alt="wave" />
    </section>
  )
}

export default Contact