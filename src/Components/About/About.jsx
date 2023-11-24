import './About.css'
import ImageCV from "../../assets/cvSinFondo.png"
import header from "../../assets/header.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import redux from "../../assets/redux.png";
import node from "../../assets/node.png";
import sequelize from "../../assets/sequelize.png";
import postgres from "../../assets/postgres.png";
import problem from "../../assets/problem.png";
import EnglishCV from "../../assets/docs/Erick Pajares CV English.pdf";
import SpanishCV from "../../assets/docs/Erick Pajares CV Spanish.pdf";

const About = () => {


    return (
      
        <section id="about">
            <div>
                <h5>ABOUT</h5>
                <h1 className='aboutMe'>Let me introduce myself.</h1>
                <center><img src={header} className="header" /></center>
                <div className="intro-info">
                    <img className="img-CV" src={ImageCV} alt="Profile Picture" />
                    <p className="lead">I am a technology enthusiast with programming experience since the age of 10. My goal is to combine my background in biology and sales with my technological skills in projects that have a positive impact. I stand out for my critical thinking, resilience, and a strong desire to learn. My long-term aspiration is to delve into blockchain technology. Currently, I am proficient in technologies such as Node.js, JavaScript, React, Blockchain, and Solidity, and I'm eager to continue learning.</p>
                </div>
            </div>
            <div className="about-content">
                <div className="profile">
                    <h3>Profile</h3>
                    <p>Enjoys working as a team and looking for solutions in everyday life. As well as leading teams to success</p>
                    <ul className="info-list">
                        <li>
                            <div className="span-div"><span>Fullname:</span></div>
                            <a>Erick Raul Pajares Balceda</a>
                        </li>
                        <li>
                            <div className="span-div"><span>Birth Date:</span></div>
                            <a>21 June, 1990</a>
                        </li>
                        <li>
                            <div className="span-div"><span>Job:</span></div>
                            <a>Software Developer, Saleman & Animal Science</a>
                        </li>
                        <li>
                            <div className="span-div"><span>Github:</span></div>
                            <a href='https://github.com/gunminiho'>GunMiNiHo's Github</a>
                        </li>
                        <li>
                            <div className="span-div"><span>Email:</span></div>
                            <a>gunminiho@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="skills">
                    <h3>Skills</h3>
                    <p>My experience includes Full Stack development using React, Redux, Node.js, Express, Sequelize, and PostgreSQL. I excel in problem-solving, effective communication, and time management. English proficiency: B-2.</p>
                    
                    <div className='containerSkills'>
                    <div><img className='skillicon' src={js}/></div>
                    <div><img className='skillicon' src={react}/></div>
                    <div><img className='skillicon' src={html}/></div>
                    <div><img className='skillicon' src={css}/></div>
                    <div><img className='skillicon' src={redux}/></div>
                    <div><img className='skillicon' src={node}/></div>
                    <div><img className='skillicon' src={sequelize}/></div>
                    <div><img className='skillicon' src={postgres}/></div>
                    <div><img className='skillicon' src={problem}/></div>
                    </div>
                </div>
            </div>


            <div className="buttons">
                <a href="#contact" title="Hire Me" className="buttonHireMe">Hire Me</a>
                <a href={EnglishCV} title="Download CV" className="buttonCv" download="CV">Download CV</a>
            </div>

        </section>
    )
}

export default About

/*
 <center><img src={header} className="header" /></center>
<img src={header} className="header" />

<ul className="skill-bars">
                        <li>
                            <div><a>90%</a></div>
                            <span>HTML5</span>
                        </li>
                        <li>
                            <div><a>90%</a></div>
                            <span>Tailwind</span>
                        </li>
                        <li>
                            <div><a>85%</a></div>
                            <span>Javascript</span>
                        </li>
                        <li>
                            <div><a>80%</a></div>
                            <span>ReactJS</span>
                        </li>
                        <li>
                            <div><a>70%</a></div>
                            <span>PostgreSQL</span>
                        </li>
                    </ul>
*/