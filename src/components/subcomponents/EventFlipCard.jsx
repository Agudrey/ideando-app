import './css/EventsSplide.css';

function EventFlipCard({ image, name, description }) {
  return (
    <div className="events_card">
      <div className="events_card_content">
        <div
          className="events_card_front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h3 className="card_title">{name}</h3>
        </div>

        <div className="events_card_back">
          <p className="card_description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventFlipCard;
