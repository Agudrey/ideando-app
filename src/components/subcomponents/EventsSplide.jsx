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
    <div className="events_cards_container">
      {EventsItems.map((item)=>
        <div className="events_card" key={item.id}>
          <div className="events_card_content">
            <div className="events_card_front" style={{backgroundImage: `url(${item.image})`}}>
              <h3 className="card_title">{item.name}</h3>
            </div>

            <div className="events_card_back">
              <p className="card_description">{item.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventsSplide