import "./css/ModalEvent.css"
import Modal from 'react-modal';

function ModalEvent({ modalIsOpen , closeModal, clickScroll }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="navbar-list-mobile"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <ul className="navbar-list-mobile">
          <li onClick={() => clickScroll("usInfo")}>Nosotros</li>
          <li onClick={() => clickScroll("howWork")}>Cómo Trabajamos</li>
          <li onClick={() => clickScroll("events")}>Eventos</li>
          <li onClick={() => clickScroll("services")}>Servicios</li>
          <li onClick={() => clickScroll("workTeam")}>Equipo</li>
          <li onClick={() => clickScroll("contact")}>Contacto</li>
        </ul>
      </Modal>
    </div>

  )
}

export default ModalEvent