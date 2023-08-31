import "./css/UsInfoCard.css"
import { UsInfoItems } from "../functions/UsInfoItems"
import Zoom from 'react-reveal/Zoom';

function UsInfoCard() {
  return (
    <div className="card-container">
      {UsInfoItems.map((item) => (
        <Zoom key={item.id}>
          <div
            key={item.id}
            className="card"
          >
            <div
              className={item.id % 2 !== 0
                ? "card-background card-background-up"
                : "card-background card-background-down"}
            >
              <p className="card-name">{item.name}</p>
              <item.icon className="icon" />
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  )
}

export default UsInfoCard