import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('cards-wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Check device type: mobile or desktop

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

detectDeviceType(); 




// Dropdown menu

function dropDownToggle() {
    document.getElementById("dropdown-content").classList.toggle("show");
}


// Dark mode

function darkModeToggle() {
    let body = document.getElementById('body');
    let main = document.getElementById('main');

    if (body.classList.contains('dark') && main.classList.contains('dark')) {
       body.classList.remove('dark');
       main.classList.remove('dark'); 
    } else {
        body.classList.add('dark');
        main.classList.add('dark');
    }
}


