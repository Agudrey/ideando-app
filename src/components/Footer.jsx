import "./css/Footer.css"
import logo from "./Images/interface-images/logo2.svg"

function Footer() {
  return (
    <footer className="footer-container">
      <p>Especialistas en eventos corporativos a medida, innovadoras y experiencias únicas para empresas.</p>

      <img src={logo} alt="logo" />

      <ul className="footer-contact-container">
        <li><a href="/">Correo</a></li>
        <li><a href="/">Teléfono</a></li>
        <li><a href="/">Política de privacidad</a></li>
      </ul> 
    </footer>
  )
}

export default Footer