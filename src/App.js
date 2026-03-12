import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import MainPart from './MainPart';
import About from './About';
import CardSection from './CardSection';
import Services from './Services';
import Doctors from './Doctors';
import Appointment from './Appointment';
import Contact from './Contact';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPart />
      <CardSection />
      <About />
      <Services />
      {/* <Doctors /> */}
      <Appointment />
      <Contact />
      <Footer />

      <a href="#home" className="top-scrolling-btn">
        <FontAwesomeIcon
          icon={faArrowUp}
          size="lg"
          className="top-scrolling-icon"
          bounce
        />
      </a>
    </div>
  );
}

export default App;
