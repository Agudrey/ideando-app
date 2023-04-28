import './App.css';
import Navbar from './components/Navbar';
import UsInfo from './components/UsInfo';
import Banner from './components/Banner';
import HowWork from './components/HowWork';
import Events from './components/Events';
import Services from './components/Services';
import WorkTeam from './components/WorkTeam';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <UsInfo />
      <HowWork />
      <Events />
      <Services />
      <WorkTeam />
      <Contact />
    </div>
  );
}

export default App;
