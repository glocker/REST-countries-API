import {detectDeviceType, emptyCardsList, dropDownToggle, darkModeToggle} from './utils.js';

// Do it because I use es6 modules
window.dropDownToggle = dropDownToggle;
window.darkModeToggle = darkModeToggle;

detectDeviceType();

const cardsList = document.getElementById('cards-list');
const cardTemplate = document.getElementById('card-template');

const requestURL = 'https://restcountries.com/v3.1/';

function showAllCountries() {
    fetch(requestURL + 'all', {method: 'GET'})
        .then(response => response.json()
            .then(data => {
                renderCard(data);
            })
        )
}

showAllCountries();

function renderCard (data) {
    data.forEach((country) => {

        // Get data from API
        const countryTitle = country.name.common;
        const countryFlag = country.flags.svg;

        const clone = cardTemplate.content.cloneNode(true);

        // Rewrite card id from card-body to unique country name
        const cardBody = clone.getElementById('card-body');
        cardBody.id = countryTitle;

        const cardTitle = clone.getElementById('card-title');
        cardTitle.textContent = countryTitle;

        const cardImage = clone.getElementById('card-image');
        cardImage.src = countryFlag;

        const cardText = clone.getElementById('card-text');
        cardText.innerHTML = "<p>Population: " + country.population.toLocaleString('en') + "</p>" + "<p>Region: " + country.region + "</p>" + "<p>Capital: " + country.capital || country.capital[0] + "</p>"

        // Insert card with data in DOM
        cardsList.appendChild(clone);
    })
}

const input = document.getElementById('search-bar');

input.addEventListener('input', (e) => {

    // Grab data from input field
    let value = e.target.value;

    // Remove default countries selection
    emptyCardsList(cardsList);

    if (value && value.trim().length >= 3) {

        value = value.trim();

        // Get data for searchable countries
        fetch(requestURL + 'name/' + value, {method: 'GET'})
            .then(response => response.json()
                .then(data => {
                    renderCard(data);
                })
            )
    }

    // In case search bar is empty we show all countries by default
    if (!value) {
        showAllCountries();
    }
})

// Filter by Regions

const regionName = document.getElementById('dropdown-content-item')
//regionName.addEventListener('click', event => sortingByRegion())

const region = {name: 'France'}


function sortingByRegion(region) {
    return fetch(requestURL)
        .then(response => response.json())
        .then(json => console.log(json.filter(item => item.region == region)))
        .catch(error => console.log(error))
}

//sortingByRegion('Asia')

window.cardOpener = cardOpener;
function cardOpener(id) {
    console.log(id)
}












