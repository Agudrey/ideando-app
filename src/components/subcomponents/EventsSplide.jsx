import "./css/EventsSplide.css"
import '@splidejs/react-splide/css';
import { EventsItems } from "../functions/EventsItems"


function EventsSplide() {
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