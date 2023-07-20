import "./css/ServicesCard.css"
import { ServicesItems } from "../functions/ServicesItems"


function ServicesCard() {
  return (
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
  )
}

export default ServicesCard