import "./css/Banner.css"
import Zoom from 'react-reveal/Zoom';

function Banner() {

    const clickScroll = (name) => {
    const element = document.getElementById(name);
    //si existe
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section className='video-container'>
      <video
        src="./video_desktop.mp4"
        className="video video-desktop"
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        poster="./interface-images/hero-poster.webp"
      ></video>

      <video
        src="./video_mobile.mp4"
        className="video video-mobile"
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        poster="./interface-images/hero-poster.webp"
      ></video>

      <div className="banner_content">
        <Zoom cascade>  
          <div className="banner-text">
            <h1>
              Organización de Eventos en Bogotá
            </h1>
            <p>
              Porque en tu evento cada detalle cuenta
            </p>
          </div>
        </Zoom> 

        <Zoom>
          <button className="banner-button" onClick={() => clickScroll("contact")}>Cotiza tu evento</button>
        </Zoom>
      </div>
    </section>
  )
}

export default Banner