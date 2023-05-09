import React, {useState} from 'react';
import './MainPage.css';
import CountriesList from './Components/CountriesList/CountriesList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./Components/Detail/Detail";

function MainPage() {

    // Get operating system theme
    const OSTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

    // In case we already visit website get saved theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        console.log(savedTheme, OSTheme)

        document.body.className = savedTheme;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<CountriesList />} />
                    <Route path=':id' element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainPage;
