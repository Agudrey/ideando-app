import "./css/Navbar.css"
import { useState } from "react";
import { BsWhatsapp } from 'react-icons/bs';
import logo from "./Images/interface-images/logo.webp"


function Navbar() {
  const [Menu, setMenu] = useState(false);

  const clickScroll = (name) => {
    //localizamos el elemento (seccion)
    const element = document.getElementById(name);
    //si existe
    if (element) {
      //hacemos scroll
      element.scrollIntoView({ behavior: "smooth" });
      setMenu(false);
    }
  };


  return (
    <nav>
      <ul>
        <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
        <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
        <li onClick={() => clickScroll("events")}>Eventos</li>
      </ul>

      <img src={logo} alt="logo" className="logo" />

      <ul>
        <li onClick={() => clickScroll("services")}>Servicios</li>
        <li onClick={() => clickScroll("workTeam")}>Equipo</li>
        <li onClick={() => clickScroll("contact")}>Contacto</li>
      </ul>

      <div className="whatsapp-container">
        <p className="whatsapp-text">Chatea con nosotros!</p>

        <a className="whatsapp-button" href="/">
          <BsWhatsapp />
        </a>
      </div>
      
    </nav>
  )
}

export default Navbar