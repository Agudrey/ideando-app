import "./css/ServicesSplide.css"
import { ServicesItems } from "../functions/ServicesItems"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import "@splidejs/splide/dist/css/splide.min.css";
import Zoom from 'react-reveal/Zoom';

function ServicesSplide() {
  return (
    <Zoom >
      <div className="services-splide-container">
        <div className="services-splide1">
          <Splide
            className="splider"
            options={ {
              type: 'loop',
              rewind:false, 
              autoplay: true,
              perMove: 6,
              perPage: 4, 
              gap: '4rem',
              arrows: false,
              pagination: false,
              autoScroll: {
                  pauseOnHover: true,
                  pauseOnFocus: false,
                  speed: 1.5
              },
            }}
            extensions={{ AutoScroll }}
          >
            {ServicesItems[0].map((item) => (
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

        <div className="services-splide2">
          <Splide
            options={ {
              type: 'loop',
              rewind:false, 
              autoplay: true,
              perMove: 5,
              perPage: 4, 
              gap: '4rem',
              arrows: false,
              pagination: false,
              autoScroll: {
                  pauseOnHover: true,
                  pauseOnFocus: false,
                  speed: 1.5
              },
            }}
            extensions={{ AutoScroll }}
          >
            {ServicesItems[1].map((item) => (
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
      </div>
    </Zoom>
  )
}

export default ServicesSplide