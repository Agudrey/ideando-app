import "./css/ContactForm.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

function ContactForm() {

  const refForm = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = "service_l5kd41j"
    const templateId = "template_f88a8ub"
    const apiKey = "dg1HKjS75DowxmeRb"


    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .catch(error => console.error(error))
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={refForm}>
      <fieldset className="input-form name">
        <label className="symbol-required">NOMBRE Y APELLIDO</label>
        <input type="text" placeholder="Nombre y apellidos" name="user_name" required/>
      </fieldset>

      <fieldset className="input-form email-input">
        <label className="symbol-required">EMAIL</label>
        <input type="email" placeholder="@Email" name="user_email" required/>
      </fieldset>

      <fieldset className="input-form phone-input">
        <label className="symbol-required">TELÉFONO</label>
        <input type="tel" placeholder="Teléfono" name="user_phone" required/>
      </fieldset>

      <fieldset className="input-form date-input">
        <label className="symbol-required">FECHA DE EVENTO</label>
        <input type="date" name="event_date" required/>
      </fieldset>

      <fieldset className="input-form persons-input">
        <label className="symbol-required">N° DE PERSONAS</label>
        <input type="number" placeholder="Invitados" name="number_invites" required/>
      </fieldset>

      <fieldset className="input-form comment">
        <label className="symbol-required">TIPO DE EVENTO</label>
        <input type="text" placeholder="Comentanos un poco más de tu evento" name="comment" requirednpm/>
      </fieldset>

      <div className="button-container">
        <button>Enviar</button>
      </div>
    </form>
  )
}

export default ContactForm