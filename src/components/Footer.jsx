import { Link } from 'react-router-dom';
import "./css/Footer.css"
import ContactLinks from "./subcomponents/ContactLinks"
import { FaRegCopyright } from 'react-icons/fa';
import Zoom from 'react-reveal/Zoom';
import { NAV_PAGES } from '../seo/siteConfig';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <Zoom cascade>
        <div className="links_container">
          <ContactLinks />
          <nav className="footer-pages-nav" aria-label="Páginas de servicios">
            {NAV_PAGES.map((page) => (
              <Link key={page.path} to={page.path} className="footer-page-link">
                {page.label}
              </Link>
            ))}
          </nav>
          <p className="copyright_text_desktop"><FaRegCopyright /> Copyrigth {currentYear}</p>
        </div>

        <ul className="footer-contact-container">
          <li><a href="mailto:contacto@ideandoeventosymarketing.com">contacto@ideandoeventosymarketing.com</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1YGpNQEiUvO0uKE1CnHW9ymL8Pp7mgjYQ/view?usp=sharing">Política de privacidad</a></li>
          <li>Bogotá, Colombia</li>
        </ul> 

        <p className="copyright_text_mobile"><FaRegCopyright /> Copyrigth {currentYear}</p>
      </Zoom>
    </footer>
  )
}

export default Footer
