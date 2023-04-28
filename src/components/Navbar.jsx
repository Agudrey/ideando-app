import "./css/Navbar.css"
import { useState } from "react";
import { BsWhatsapp } from 'react-icons/bs';
import logo1 from "./Images/interface-images/logo1.svg"
import logo2 from "./Images/interface-images/logo2.svg"


function Navbar() {
  const [url, setUrl] = useState(logo1)
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


  window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
    (window.scrollY > 0) ? setUrl(logo2) : setUrl(logo1)
  });

  return (
    <nav>
      <ul>
        <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
        <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
        <li onClick={() => clickScroll("events")}>Eventos</li>
      </ul>

      <img src={url} alt="logo" className="logo" />

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