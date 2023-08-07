import "./css/Banner.css"
import video_mobile from "./video_mobile.mp4"
import video_desktop from "./video_desktop.mp4"


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
      <video src={video_desktop} className="video video-desktop" loop muted autoPlay></video>

      <video src={video_mobile} className="video video-mobile" loop muted autoPlay></video>

      <div className="banner_content">
        <div className="banner-text">
          <h2>CREAMOS EXPERIENCIAS INOVADORAS</h2>
          <p>Porque en tu evento cada detalle cuenta</p>
        </div>

        <button className="banner-button" onClick={() => clickScroll("contact")}>Cotiza tu evento</button>
      </div>
    </section>
  )
}

export default Banner