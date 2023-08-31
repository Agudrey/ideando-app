import "./css/EventsSplide.css"
import '@splidejs/react-splide/css';
import { EventsItems } from "../functions/EventsItems"
import Zoom from 'react-reveal/Zoom';

function EventsSplide() {
  return (
    <Zoom cascade>
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
    </Zoom>
  )
}

export default EventsSplide