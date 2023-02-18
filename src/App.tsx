import React from 'react';
import './MainPage.css';
import Header from "./Components/Header/Header";
import CountriesList from "./Components/CountriesList/CountriesList";

function MainPage() {
  return (
    <div className="App">
      <Header />
      <CountriesList />
    </div>
  );
}

export default MainPage;
