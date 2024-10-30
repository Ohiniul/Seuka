import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Projects';
import Jabar from './components/Jabar';
import Jateng from './components/Jateng';
import Jatim from './components/Jatim';
import DKI from './components/DKI';
import DIY from './components/DIY';
import Java from './components/Java'
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Jabar/>
      <Jateng/>
      <Jatim/>
      <DKI/>
      <DIY/>
      <Java/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
