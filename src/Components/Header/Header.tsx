import React, {useState} from 'react';
import moon from "../../img/moon.svg";
import './Header.css';

function Header() {

    let [theme, setTheme] = useState('light');
    const savedTheme = localStorage.getItem('theme');

    const toggleTheme = () => {

        if (savedTheme) {
            theme = savedTheme;
        }

        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            document.body.className = 'dark';
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
            document.body.className = 'light';
        }
    };

    return (
        <header>
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