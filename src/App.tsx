import React from 'react';
import './MainPage.css';
import CountriesList from './Components/CountriesList/CountriesList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./Components/Detail/Detail";

function MainPage() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route index element={<CountriesList />} />
                  <Route path='detail/:id' element={<Detail />} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default MainPage;
