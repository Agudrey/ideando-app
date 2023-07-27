import "./css/UsInfoLine.css"
import { UsInfoItems } from "../functions/UsInfoItems"

function UsInfoLine() {
  return (
    <div className="line_container">
      <div className="card_line"></div>

      {UsInfoItems.map((item) => (
        <div key={item.id} className="point"></div>
      ))}
    </div>
  )
}

export default UsInfoLine