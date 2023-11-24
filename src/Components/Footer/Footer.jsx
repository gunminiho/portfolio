import './Footer.css'
import { FaLongArrowAltUp } from "react-icons/fa";
import back from "../../assets/row.jpg";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";


const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 200) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <footer>
                <div className="row">
                    <div className="">
                        <ul className="footer-social">
                            <li>
                                <a href='https://github.com/gunminiho'>
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/gunminiho/'>
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-eight tab-full">
                        <div className="copyright">
                            <span>© Copyright 2023</span>
                            <span>Design by <a href="#about">Erick Pajares Balceda</a></span>
                        </div>
                    </div>

                    <div id="go-top" style={{ display: showScroll ? 'block' : 'none' }}>
                        <a className="smoothscroll" title="Back to Top" onClick={scrollToTop} href="#top">
                            <Link to="home" smooth={true} duration={1000}>
                                    <img className="imgBack" src={back} />
                            </Link>
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer