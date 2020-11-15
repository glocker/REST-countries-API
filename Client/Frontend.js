/*const { request } = require("express");*/

function dropDownToggle() {
    document.getElementById("dropdown-content").classList.toggle("show");
}

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

const cardTitle = document.getElementById('card-title');
const cardImage = document.getElementById('card-image');
const requestURL = 'https://restcountries.eu/rest/v2/all';
var enter = document.getElementById('search-bar');

function sendRequest(method, url) {
    return new Promise( (resolve, reject) => {
        
        const xhr = new XMLHttpRequest()
    
        xhr.open(method, url)
    
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        
        var data = JSON.parse(xhr.response)
        console.log(data)
        
        data.forEach((card) => {
            

            var countryTitle = JSON.stringify(card.name).toString();
            var countryFlag = JSON.stringify(card.flag).toString();

            if (enter.value == card.name) {
                cardTitle.innerHTML = countryTitle;
                cardImage.src = countryFlag;
                console.log(countryTitle)
            }
            
            
        })
        
       
    }
        xhr.onerror = function() {
            reject( 'Error ' + this.status )
        }
        xhr.send()
    })
}

sendRequest('GET', requestURL)
            .then(data => console.log(data))
            .catch(err => console.log(err))





/* 
class Card {
    let htmlList = '';

    render() {
        catalog.forEach((el) => {
            console.log(el);
            htmlList += `
             <li>
                <span>${el.name}</span>
                <p>${el.id}</p>
             </li>
            `;
        })
    }

    const html = `
        <ul>${htmlList}</ul>
    `;

    ROOT_CARDS.innerHTML = html;
}



const ROOT_CARDS = document.getElementById('cards-body')

const card = new Card();
card.render();
*/