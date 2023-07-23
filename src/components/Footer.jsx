import "./css/Footer.css"
import logo from "./Images/interface-images/green-logo.webp"
import ContactLinks from "./subcomponents/ContactLinks"
import { FaRegCopyright } from 'react-icons/fa';



function Footer() {
  return (
    <footer className="footer-container">
      <div className="links_container">
        <ContactLinks />
        <p className="copyright_text"><FaRegCopyright /> Copyrigth 2023</p>
      </div>

      {/* <img src={logo} alt="logo" /> */}

      <ul className="footer-contact-container">
        <li><a href="/">contacto@ideandoeventosymarketing.com</a></li>
        <li><a href="/">Política de privacidad</a></li>
        <li>Bogotá, Colombia</li>
      </ul> 
    </footer>
  )
}

export default Footer