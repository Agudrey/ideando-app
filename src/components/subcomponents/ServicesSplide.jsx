import "./css/ServicesSplide.css"
import { ServicesItems } from "../functions/ServicesItems"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import "@splidejs/splide/dist/css/splide.min.css";

function ServicesSplide() {
  return (
    <div className="services-splide-container">
      <Splide
        options={ {
          type: 'loop',
          rewind:false, 
          autoplay: true,
          perMove: 11,
          perPage: 4, 
          gap: '4rem',
          arrows: false,
          pagination: false,
          autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              speed: 2
          },
        }}
        extensions={{ AutoScroll }}
      >
        {ServicesItems.map((item) => (
          <SplideSlide
            key={item.id}
            className={item.id % 2 !== 0
              ? "services-card card-green"
              : "services-card card-purple"}
          >
            {/* <span></span>
            <span></span> */}
            <span></span>
            <div className="content">
              <item.icon className="services-icon" />
              <p>{item.name}</p>
            </div>

          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default ServicesSplide