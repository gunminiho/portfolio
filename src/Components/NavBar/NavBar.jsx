import "./NavBar.css"
import { useState } from "react";

const NavBar = () => {

    const [clicked, setClicked] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked);
        setShowDropdown(!showDropdown);
    };
    return (
        <header>
            <div className="row">
                <div className="top-bar">
                    <button className={`menu-toggle ${clicked ? 'is-clicked' : ''}`} href="#" onClick={handleButtonClick}>
                        <span>Menu</span>
                    </button>
                    <div id="main-nav-wrap">
                        {showDropdown && (
                            <ul className="main-navigation">
                                <li className="current"><a className="smoothscroll" href="#intro" title="">Home</a></li>
                                <li><a className="smoothscroll" href="#about" title="">About</a></li>
                                <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
                                <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
                            </ul>
                        )}
                    </div>
                    <div className="logo">MENU</div>
                </div>
            </div>

        </header>

    )
}

export default NavBar