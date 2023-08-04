import './App.css';
import Navbar from './components/Navbar';
import UsInfo from './components/UsInfo';
import Banner from './components/Banner';
import HowWork from './components/HowWork';
import Events from './components/Events';
import Services from './components/Services';
import WorkTeam from './components/WorkTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BsWhatsapp } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';


function App() {
  return (
    <main className="App">
      <Navbar />
      <Banner />
      <UsInfo />
      <HowWork />
      <Events />
      <Services />
      <WorkTeam />
      <Contact />
      <Footer />

      <div className="phone-container">
        <p className="phone-text">+57 3001234567</p>
        <a className="phone-button" href="tel:+573112292727" aria-label="Tell us about your event">
          <BiPhoneCall />
        </a>
      </div>

      <div className="whatsapp-container">
        <p className="whatsapp-text">Chatea con nosotros!</p>
        <a className="whatsapp-button" href="https://api.whatsapp.com/send?phone=573112292727" aria-label="Tell us about your event">
          <BsWhatsapp />
        </a>
      </div>
    </main>
  );
}

export default App;
