import React, {useContext, useState} from 'react';
import moon from "../../img/moon.svg";
import './Header.css';
import { ThemeContext } from '../ThemeContext/ThemeContext';

function Header() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={ theme === 'dark' ? 'header-dark' : '' }>
            <h2>Where in the world?</h2>
            <div className="dark-mode-container">
            <button type="button" className="dark-mode-btn" onClick={toggleTheme}>
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