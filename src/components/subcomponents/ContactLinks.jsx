import "./css/ContactLinks.css"
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';

function ContactLinks() {
  const tiktokLink = "https://www.tiktok.com/es/"
  const facebookLink = "https://www.facebook.com/profile.php?id=100068967685536"
  const instagramLink = "https://instagram.com/ideandoeventosymarketing?igshid=ZDdkNTZiNTM="
  const youtubeLink = "https://www.youtube.com/@ideandoeventosymarketing6475"
  const linkedinLink = "https://www.linkedin.com/company/ideando-eventos-y-marketing/"


  return (
    <Zoom cascade>
      <div className="links-container">
        <a className="link" href={tiktokLink} target="_blank" rel="noreferrer">
          <FaTiktok className="link-icon" />
          <span className="link-title">Tik Tok</span>
        </a>

        <a className="link" href={facebookLink} target="_blank" rel="noreferrer">
          <FaFacebook className="link-icon facebook" />
          <span className="link-title facebook">Facebook</span>
        </a>

        <a className="link" href={instagramLink} target="_blank" rel="noreferrer">
          <FaInstagram className="link-icon instagram" />
          <span className="link-title instagram">Instagram</span>
        </a>

        <a className="link" href={youtubeLink} target="_blank" rel="noreferrer">
          <FaYoutube className="link-icon youtube" />
          <span className="link-title youtube">Youtube</span>
        </a>

        <a className="link" href={linkedinLink} target="_blank" rel="noreferrer">
          <BsLinkedin className="link-icon linkedin" />
          <span className="link-title linkedin">Linkedin</span>
        </a>
      </div>
    </Zoom>
  )
}

export default ContactLinks