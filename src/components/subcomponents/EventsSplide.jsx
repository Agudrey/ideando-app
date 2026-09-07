import "./css/EventsSplide.css"
import '@splidejs/react-splide/css';
import { EventsItems } from "../functions/EventsItems"
import EventFlipCard from "./EventFlipCard"
import Zoom from 'react-reveal/Zoom';

function EventsSplide() {
  return (
    <Zoom cascade>
      <div className="events_cards_container">
        {EventsItems.map((item) =>
          <EventFlipCard key={item.id} {...item} />
        )}
      </div>
    </Zoom>
  )
}

export default EventsSplide
