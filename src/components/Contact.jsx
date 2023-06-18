import "./css/Contact.css"
import ContactForm from "./subcomponents/ContactForm"
import logo from "./Images/interface-images/circle-logo.webp"

function Contact() {
  return (
    <section className="contact-container" id="contact">

      <article className="contact-info">
        <h3>¿Quieres organizar un evento?</h3>
        <p>Completa el siguiente formulario y nos pondremos en contacto.</p>
      </article>

      <ContactForm />

      <img src={logo} alt="logo" className="background-logo contact-logo"/>
    </section>
  )
}

export default Contact