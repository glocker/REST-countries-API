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




async function searchFunction() {
    let val = document.getElementById('search-bar');
    
    const data = await request('https://restcountries.eu/rest/v2/all')
    console.log(data);
}

const catalog = [
    {
        id: '1',
        name: 'Germany'
    },
    {
        id: '2',
        name: 'USA'
    }
]







async function request (url, method = 'GET', data = null) {
    try {
        const headers = {};
        let body 

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }
        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json;
    } catch (e) {
        console.warn('error', e.message)
    }
}

/*
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();

// (2) запрос на другой домен :)
xhr.open('GET', 'https://restcountries.eu/rest/v2/region/europe', true);

xhr.onload = function() {
  alert( this.responseText );
  console.log(this.responseText);
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();
*/




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