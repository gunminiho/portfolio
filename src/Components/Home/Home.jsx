import React, { useEffect, useState } from "react";
import linux from "../../assets/mac.png";
import back from "../../assets/row.jpg";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  const [lines, setLines] = useState([
    "¡Hello world!",
    "I'm Erick Pajares",
    "Full Stack Web Developer",
    "click & find more about me:",
    'About me',
    'Projects',
    "Contact",
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLineIndex((prevIndex) =>
        prevIndex < lines.length - 1 ? prevIndex + 1 : prevIndex
      );
    }, 1000); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [lines]);

  return (
    <div id="intro">
      <center>
        <div className="terminalbox">
          <div className="terminaltopbar">
            <div className="terminalcloseicon"></div>
            <div className="terminalminimizeicon"></div>
            <div className="terminalmaximizeicon"></div>
            <div className="terminaltitle">
              <img className="imgLinux" src={linux} />
              Erick@Pajares-Ubuntu:
            </div>
          </div>
          <div className="terminaltextbox">
            {lines.slice(0, currentLineIndex + 1).map((line, index) => (
              index < 4 ? <p className="terminaltext" key={index}>{line}</p> : <div><Link to={line} smooth={true} duration={1000} offset={0}><p className="terminaltextLink" key={index}>{line}</p></Link></div>
            ))}
          </div>
        </div>
      </center>
      
      
      </div>
  );
};

export default Home;