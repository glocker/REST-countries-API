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



// Cards search and render

const cardBody = document.querySelector('.card-body');
const cardTitle = document.getElementById('card-title');
const cardImage = document.getElementById('card-image');
const cardText = document.getElementById('card-text');

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
            

            var countryTitle = JSON.stringify(card.name).toString().slice(1, -1);
            var countryFlag = JSON.stringify(card.flag).toString().slice(1, -1);

            if (enter.value == card.name) {

                // If country name was found in API's JSON
                // then toggle display: none

                cardBody.style.display = 'none'
                ? cardBody.style.display = 'block' 
                : cardBody.style.display = 'none'

                cardTitle.innerHTML = countryTitle;
                cardImage.src = countryFlag;
                
                cardText.innerHTML = "<p>Population: " + card.population + "</p>" + "<p>Region: " + card.region + "</p>" + "<p>Capital: " + card.capital + "</p>"
                
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




