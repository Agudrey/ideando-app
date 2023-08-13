import "./css/ContactForm.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'


function ContactForm() {
  const refForm = useRef();

  const cleanInputs = () => {
    refForm.current.reset();
  }

  const showAlert = () =>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu evento ha sido enviado',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = "service_l5kd41j"
    const templateId = "template_f88a8ub"
    const apiKey = "dg1HKjS75DowxmeRb"


    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .catch(error => console.error(error))
    cleanInputs()
    showAlert()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={refForm}>
      <fieldset className="input-form name">
        <label className="symbol-required" for="name">NOMBRE Y APELLIDO:</label>
        <input type="text" placeholder="Nombre y apellidos" name="user_name" id="name" required/>
      </fieldset>

      <fieldset className="input-form email-input">
        <label className="symbol-required" for="email">EMAIL:</label>
        <input type="email" placeholder="@Email" name="user_email" id="email" required/>
      </fieldset>

      <fieldset className="input-form phone-input">
        <label className="symbol-required" for="phone">TELÉFONO</label>
        <input type="tel" placeholder="Teléfono" name="user_phone" id="phone" required/>
      </fieldset>

      <fieldset className="input-form date-input">
        <label className="symbol-required" for="date">FECHA DE EVENTO</label>
        <input type="date" name="event_date" id="date" required/>
      </fieldset>

      <fieldset className="input-form persons-input">
        <label className="symbol-required" for="persons">N° DE PERSONAS</label>
        <input type="number" placeholder="Invitados" name="number_invites" id="persons" required/>
      </fieldset>

      <fieldset className="input-form comment">
        <label className="symbol-required" for="comment">TIPO DE EVENTO</label>
        <input type="text" placeholder="Comentanos un poco más de tu evento" name="comment" id="comment" required/>
      </fieldset>

      <div className="button-container">
        <button>Enviar</button>
      </div>
    </form>
  )
}

export default ContactForm