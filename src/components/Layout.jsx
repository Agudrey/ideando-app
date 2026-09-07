import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import Navbar from './Navbar';
import Footer from './Footer';
import { PHONE_NUMBER } from '../seo/siteConfig';
import '../App.css';

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <main className="App">
      <Navbar />
      <Outlet />
      <Footer />

      <div className="phone-container">
        <p className="phone-text">{`+57 ${PHONE_NUMBER}`}</p>
        <a
          className="phone-button"
          href={`tel:+57${PHONE_NUMBER}`}
          aria-label="Llamar para cotizar tu evento"
        >
          <BiPhoneCall />
        </a>
      </div>

      <div className="whatsapp-container">
        <p className="whatsapp-text">Chatea con nosotros!</p>
        <a
          className="whatsapp-button"
          href={`https://api.whatsapp.com/send?phone=57${PHONE_NUMBER}`}
          aria-label="Chatear por WhatsApp sobre tu evento"
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp />
        </a>
      </div>
    </main>
  );
}

export default Layout;
