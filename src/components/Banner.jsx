import "./css/Banner.css"
import ReactPlayer from "react-player"


function Banner() {


  return (
    <section className='video-container'>
      <ReactPlayer 
        className="video"
        url="https://www.youtube.com/watch?v=lEvRAQgm77s&ab_channel=IdeandoEventosyMarketing" 
        playing
        loop
        muted
        height={"100%"}
        width={"100%"}
        config ={{youtube : {playerVars : {  showinfo : 1  } }}}
      />
    </section>
  )
}

export default Banner