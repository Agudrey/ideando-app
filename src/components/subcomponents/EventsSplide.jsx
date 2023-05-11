import "./css/EventsSplide.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { EventsItems } from "../functions/EventsItems"
import { useState } from "react"
import ModalEvent from "./ModalEvent";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'


function EventsSplide() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  
  const openModal = (item) => {
    setIsOpen(true);
    setSelectedItem(item.id)
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <div className="events-splide-container">
      <Splide
        options={ {
          type: 'loop',
          rewind:false, 
          autoplay: true,
          perMove: 12,
          perPage: 3, 
          gap: '1rem',
          arrows: false,
          pagination: false,
          autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              speed: 2
          },

          // type   : 'loop',
          // drag   : 'free',
          // focus  : 'center',
          // gap   : '1rem',
          // pagination: false,
          // perPage: 3, 
          // autoplay: true, 
        }}
        extensions={{ AutoScroll }}
      >

        {EventsItems.map((item) => (
          <SplideSlide
            key={item.id}
            className="event-card"
            onClick={() => openModal(item)}
          >
            <img className="event-image" src={item.image} alt="event_image" />
            <h4 className="event-name">{item.name}</h4>
            <p className="event-description">Más información...</p>
          </SplideSlide>
        ))}
      </Splide>

      <ModalEvent 
        selectedItem={selectedItem}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  )
}

export default EventsSplide