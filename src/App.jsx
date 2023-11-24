import React, { useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

function App() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    //scroll.scrollTo(1200);
    // Aquí podrías agregar tu lógica para animaciones al hacer scroll
  };

  return (
    <div className='master'>

      

      
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="About me" className="element">
        <About />
      </Element>
      <Element name="Projects" className="element">
        <Resume />
      </Element>
      <Element name="Contact" className="element">
        <Contact />
      </Element>

      <Footer />


    </div>
  );
}

export default App;
/*
<NavBar />

<Link to="home" smooth={true} duration={1000} offset={-50}>
        <p>Home</p>
      </Link>
      <Link to="about" smooth={true} duration={1500} offset={-50}>
        <p>About</p>
      </Link>
      <Link to="resume" smooth={true} duration={2000} offset={-50}>
        <p>Resume</p>
      </Link>
      <Link to="contact" smooth={true} duration={2500} offset={-50}>
        <p>Contact</p>
      </Link>


     

*/