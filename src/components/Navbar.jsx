import "./css/Navbar.css"
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import logo from "./Images/interface-images/logo.webp"
import Modal from 'react-modal';


function Navbar() {
  const [menu, setMenu] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const clickMenuBurger = () => {
    setMenu(!menu);
  };
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <ul className="navbar-list-desktop">
        <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
        <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
        <li onClick={() => clickScroll("events")}>Eventos</li>
      </ul>

      <img src={logo} alt="logo" className="logo" />

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
  )
}

export default Navbar