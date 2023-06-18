import "./css/ModalEvent.css"
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { EventsItems } from "../functions/EventsItems"


function ModalEvent({ modalIsOpen , closeModal, selectedItem }) {

  const eventInfo = selectedItem <= 12? EventsItems.filter((item) => item.id === selectedItem).shift() : EventsItems[0]

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <div className="modal_header">
          <h2 className="modal-event-name">{eventInfo.name}</h2>
          <button className="close_button" onClick={closeModal}>
            <AiOutlineCloseCircle />
          </button>
        </div>

          <div className="modal-event-info">
            <img className="modal-event-image" src={eventInfo.image} alt="event_image" />
            <p className="modal-event-desc">{eventInfo.description}</p>
          </div>
      </Modal>
    </div>

  )
}

export default ModalEvent