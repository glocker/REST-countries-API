import React from 'react';
import moon from "../../img/moon.svg";
import './Header.css';

function Header() {
    return (
        <header>
            <h2>Where in the world?</h2>
            <div className="dark-mode-container">
            <button type="button" className="dark-mode-btn">
                <img src={moon} alt="Dark mode" className="dark-mode-icon" />
                <div className="dark-mode-title">
                    &nbsp;Dark Mode
                </div>
            </button>
            </div>
        </header>
    )
}

export default Header;