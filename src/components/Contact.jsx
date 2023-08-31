import "./css/Contact.css"
import ContactForm from "./subcomponents/ContactForm"
import Zoom from 'react-reveal/Zoom';

function Contact() {
  return (
    <section className="contact-container" id="contact">
      <article className="contact-info">
        <Zoom cascade>
          <h3>¿Quieres organizar un evento?</h3>
          <p>Completa el siguiente formulario y nos pondremos en contacto.</p>
        </Zoom>
      </article>

      <ContactForm />

      <img src="./interface-images/circle-logo.webp" alt="logo" className="background-logo contact-logo"/>
    </section>
  )
}

export default Contact