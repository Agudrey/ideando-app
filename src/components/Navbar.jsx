import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./css/Navbar.css"
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import Zoom from 'react-reveal/Zoom';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (name) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clickScroll = (name) => {
    if (location.pathname === '/') {
      scrollToSection(name);
    } else {
      navigate(`/#${name}`);
    }
    setMenu(false);
  };

  const clickMenuBurger = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const timer = setTimeout(() => scrollToSection(sectionId), 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <Zoom>
      <nav className="main-navbar">
        <ul className="navbar-list-desktop">
          <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
          <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
          <li>
            <Link to="/organizacion-de-eventos-bogota" className="navbar-link">
              Eventos
            </Link>
          </li>
        </ul>

        <Link to="/" aria-label="Ir al inicio - Ideando Eventos y Marketing">
          <img
            src="./interface-images/logo.webp"
            alt="Ideando Eventos y Marketing - Organización de eventos en Bogotá"
            className="logo"
            width="112"
            height="80"
          />
        </Link>

        <ul className="navbar-list-desktop">
          <li>
            <Link to="/servicios-para-eventos-bogota" className="navbar-link">
              Servicios
            </Link>
          </li>
          <li onClick={() => clickScroll("workTeam")}>Equipo</li>
          <li onClick={() => clickScroll("contact")}>Contacto</li>
        </ul>

        <GiHamburgerMenu onClick={clickMenuBurger} className={menu? "disable" : "burguer-icon"}/>
        <MdOutlineClose onClick={clickMenuBurger} className={!menu? "disable" : "burguer-icon"}/>

        <ul className={!menu? "disable" : "navbar-list-mobile"}>
          <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
          <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
          <li>
            <Link to="/organizacion-de-eventos-bogota" className="navbar-link" onClick={() => setMenu(false)}>
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/servicios-para-eventos-bogota" className="navbar-link" onClick={() => setMenu(false)}>
              Servicios
            </Link>
          </li>
          <li onClick={() => clickScroll("workTeam")}>Equipo</li>
          <li onClick={() => clickScroll("contact")}>Contacto</li>
        </ul>
      </nav>
    </Zoom>
  )
}

export default Navbar
