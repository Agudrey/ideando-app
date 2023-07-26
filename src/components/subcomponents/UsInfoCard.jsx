import "./css/UsInfoCard.css"
import { UsInfoItems } from "../functions/UsInfoItems"
import line from "../Images/interface-images/SVG curve.svg"

function UsInfoCard() {
  return (
    <div className="card-container">
      {/* <img src={line} className="line" alt="wave"/> */}

      {UsInfoItems.map((item) => (
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
      ))}
    </div>
  )
}

export default UsInfoCard