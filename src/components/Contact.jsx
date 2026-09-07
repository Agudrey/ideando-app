import "./css/Contact.css"
import ContactForm from "./subcomponents/ContactForm"
import Zoom from 'react-reveal/Zoom';

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <article className="contact-info">
        <Zoom cascade>
          <h2>¿Quieres Organizar un Evento en Bogotá?</h2>
          <p>Completa el siguiente formulario y nos pondremos en contacto.</p>
        </Zoom>
      </article>

      <ContactForm />

      <img src="./interface-images/circle-logo.webp" alt="" className="background-logo contact-logo" width="500" height="500" aria-hidden="true" />
    </section>
  )
}

export default Contact