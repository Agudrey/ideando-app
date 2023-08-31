import "./css/Footer.css"
import ContactLinks from "./subcomponents/ContactLinks"
import { FaRegCopyright } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';

function Footer() {
  return (
    <footer className="footer-container">
      <Zoom cascade>
        <div className="links_container">
          <ContactLinks />
          <p className="copyright_text_desktop"><FaRegCopyright /> Copyrigth 2023</p>
        </div>

        <ul className="footer-contact-container">
          <li><a href="mailto:contacto@ideandoeventosymarketing.com">contacto@ideandoeventosymarketing.com</a></li>
          <li><a href="https://drive.usercontent.google.com/download?id=1YGpNQEiUvO0uKE1CnHW9ymL8Pp7mgjYQ&export=download&authuser=0&confirm=t&uuid=bff2fa36-419b-48fb-8043-b09e277824dd&at=AC2mKKR-4r_IkiDk7decv55D8-GZ:1690692590532">Política de privacidad</a></li>
          <li>Bogotá, Colombia</li>
        </ul> 

        <p className="copyright_text_mobile"><FaRegCopyright /> Copyrigth 2023</p>
      </Zoom>
    </footer>
  )
}

export default Footer