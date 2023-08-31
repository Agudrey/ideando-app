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
      <video src="./video_desktop.mp4" className="video video-desktop" loop muted autoPlay></video>

      <video src="./video_mobile.mp4" className="video video-mobile" loop muted autoPlay></video>

      <div className="banner_content">
        <div className="banner-text">
          <h2>
            <Zoom cascade>  
              CREAMOS EXPERIENCIAS INOVADORAS
            </Zoom>          
          </h2>
          <p>
            <Zoom cascade>
              Porque en tu evento cada detalle cuenta
            </Zoom>
          </p>
        </div>

        <Zoom>
          <button className="banner-button" onClick={() => clickScroll("contact")}>Cotiza tu evento</button>
        </Zoom>
      </div>
    </section>
  )
}

export default Banner