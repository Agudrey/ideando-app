import "./css/ServicesCard.css"
import { ServicesItems } from "../functions/ServicesItems"
import Zoom from 'react-reveal/Zoom';

function ServicesCard() {
  return (
    <Zoom cascade>
      <div className="services-card-container">
        {ServicesItems[0].map((item) => (
          <div
            key={item.id}
            className={item.id % 2 !== 0
              ? "services-card-mobile card-green"
              : "services-card-mobile card-purple"}
          >
            <item.icon className="services-card-icon" />
            <p className="services-card-name">{item.name}</p>
          </div>
        ))}

        {ServicesItems[1].map((item) => (
          <div
            key={item.id}
            className={item.id % 2 !== 0
              ? "services-card-mobile card-green"
              : "services-card-mobile card-purple"}
          >
            <item.icon className="services-card-icon" /> 
            <p className="services-card-name">{item.name}</p>
          </div>
        ))}
      </div>
    </Zoom>
  )
}

export default ServicesCard