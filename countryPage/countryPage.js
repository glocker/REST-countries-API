//import {darkModeToggle} from '../utils.js';

//window.dropDownToggle = darkModeToggle;

// Get country name
const url = document.location.href;
const params = (new URL(url)).searchParams;
const countryName = params.get("name");

const country = document.getElementById('name');
country.textContent = countryName;
console.log(country)

const requestURL = 'https://restcountries.com/v3.1/';

function getCountryData() {
    fetch(requestURL + `name/${countryName}`, {method: 'GET'})
        .then(response => response.json()
            .then(data => {

                // Get data from API
                const fullData = data[0];

                const name = fullData.name.common;
                const nativeName = fullData.name.nativeName.ara.official;
                const population = fullData.population.toLocaleString('en');
                const region = fullData.region;
                const subRegion = fullData.subregion;
                const capital = fullData.capital[0];

                const domain = fullData.tld[0];
                const currencies = fullData.currencies.JOD.name;
                const languages = fullData.languages.ara;

                // Set country details to the page
                const countryName = document.getElementById('name');
                countryName.textContent = name;

                const countryNativeName = document.getElementById('nativeName');
                countryNativeName.textContent = `Native name: ${nativeName}`;

                const countryPopulation = document.getElementById('population');
                countryPopulation.textContent = `Population: ${population}`;

                const countryRegion = document.getElementById('region');
                countryRegion.textContent = `Region: ${region}`;

                const countrySubRegion = document.getElementById('subRegion');
                countrySubRegion.textContent = `Sub Region: ${subRegion}`;

                const countryCapital = document.getElementById('capital');
                countryCapital.textContent = `Capital: ${capital}`;

                const countryDomain = document.getElementById('domain');
                countryDomain.textContent = `Top Level Domain: ${domain}`;

                const countryCurrencies = document.getElementById('currencies');
                countryCurrencies.textContent = `Currencies: ${currencies}`;

                const countryLanguages = document.getElementById('languages');
                countryLanguages.textContent = `Languages: ${languages}`;

                console.log(name + "    " + nativeName);
            })
        )
}

getCountryData();