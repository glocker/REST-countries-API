import React, {useState, useContext} from 'react';
import './MainPage.css';
import CountriesList from './Components/CountriesList/CountriesList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import { ThemeProvider, ThemeContext } from './Components/ThemeContext/ThemeContext';

function MainPage() {

    // Get operating system theme
    const OSTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

    // In case we already visit website get saved theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        console.log(savedTheme, OSTheme)

        document.body.className = savedTheme;
    }

    let [theme, setTheme]: any = useState('light');

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
        <div className="App">
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<CountriesList />} />
                        <Route path=':id' element={<Detail />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default MainPage;
