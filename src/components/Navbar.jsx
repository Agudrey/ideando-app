import "./css/Navbar.css"
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import Zoom from 'react-reveal/Zoom';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const clickMenuBurger = () => {
    setMenu(!menu);
  };
  
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
    <Zoom>
      <nav>
        <ul className="navbar-list-desktop">
          <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
          <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
          <li onClick={() => clickScroll("events")}>Eventos</li>
        </ul>

        <img src="./interface-images/logo.webp" alt="logo" className="logo" />

        <ul className="navbar-list-desktop">
          <li onClick={() => clickScroll("services")}>Servicios</li>
          <li onClick={() => clickScroll("workTeam")}>Equipo</li>
          <li onClick={() => clickScroll("contact")}>Contacto</li>
        </ul>

        <GiHamburgerMenu onClick={clickMenuBurger} className={menu? "disable" : "burguer-icon"}/>
        <MdOutlineClose onClick={clickMenuBurger} className={!menu? "disable" : "burguer-icon"}/>

        <ul className={!menu? "disable" : "navbar-list-mobile"}>
          <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
          <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
          <li onClick={() => clickScroll("events")}>Eventos</li>
          <li onClick={() => clickScroll("services")}>Servicios</li>
          <li onClick={() => clickScroll("workTeam")}>Equipo</li>
          <li onClick={() => clickScroll("contact")}>Contacto</li>
        </ul>
      </nav>
    </Zoom>
  )
}

export default Navbar