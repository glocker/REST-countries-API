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
            console.log(card.name);
            var dataStr = JSON.stringify(card.name).toString();
            
            
            cardTitle.innerHTML = dataStr;
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
document.addEventListener('DOMContentLoaded', () =>  {
    
    enter.addEventListener('onkeyup', (e) => {
        if (e.keyCode == 13) {
            enter = encodeURIComponent(enter.value);
        }      
    })

    const xhr = new XMLHttpRequest();

    xhr.open('POST', requestURL, true);
    xhr.addEventListener('readystatechange', () => {
        if ((xhr.readyState == 4) && (xhr.status == 200)) {
            cardTitle.innerHTML = xhr.responseText;
        } else {
            alert('ERROR');
        }
    })
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(enter);

})
*/

/*
function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {
        
        const xhr = new XMLHttpRequest()
    
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        
        console.log(JSON.parse(xhr.response))
        //cardTitle.innerHTML = xhr.response
    }
        xhr.onerror = function() {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}

const body = {
    name: 'enter.value'
}

sendRequest('POST', requestURL, body)
            .then(data => console.log(data))
            .catch(err => console.log(err))
*/




/*
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
*/


/*
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