import "./css/Banner.css"
import ReactPlayer from "react-player"


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
      <ReactPlayer 
        className="video video-desktop"
        url="https://www.youtube.com/watch?v=IPZY6rBQEZ0&ab_channel=IdeandoEventosyMarketing" 
        playing
        loop
        muted
        height={"100%"}
        width={"100%"}
        config ={{youtube : {playerVars : {  showinfo : 1  } }}}
      />

      <div className="banner-text">
        <h2>CREAMOS EXPERIENCIAS INOVADORAS</h2>
        <p>Porque en tu evento cada detalle cuenta</p>
      </div>

      <ReactPlayer 
        className="video video-mobile"
        url="https://youtube.com/shorts/dx_jVE1QKzQ?feature=share" 
        playing
        loop
        muted
        height={"100%"}
        width={"100%"}
        config ={{youtube : {playerVars : {  showinfo : 1  } }}}
      />

      <button className="banner-button" onClick={() => clickScroll("contact")}>Cotiza tu evento</button>
    </section>
  )
}

export default Banner