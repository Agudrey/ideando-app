import "./css/Contact.css"
import ContactForm from "./subcomponents/ContactForm"
import logo from "./Images/interface-images/circle-logo.webp"

function Contact() {
  return (
    <section className="contact-container" id="contact">

      <article className="contact-info">
        <h3>Contacto</h3>
        <p>Solicita una asesoria presencial o video llamada y cuéntanos de tu evento y recibe una cotización personalizada de acuerdo a tus necesidades y objetivos.</p>
      </article>

      <ContactForm />

      <img src={logo} alt="logo" className="background-logo contact-logo"/>
    </section>
  )
}

export default Contact