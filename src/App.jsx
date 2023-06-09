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
    </main>
  );
}

export default App;
