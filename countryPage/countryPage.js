import {darkModeToggle} from '../utils.js';

window.dropDownToggle = darkModeToggle;

// Get country name
const url = document.location.href;
const params = (new URL(url)).searchParams;
const countryName = params.get("name");

const country = document.getElementById('name');
country.textContent = countryName;


console.log(country)