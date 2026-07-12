import './App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Home from './components/Home';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import TechStrip from './components/TechStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main container1">
      <Loader />
      <Navbar />
      <Home />
      <StatsStrip />
      <About />
      <TechStrip />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;