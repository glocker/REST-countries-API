import React, { useEffect } from 'react';
import './CountriesList.css';

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList() {

    useEffect(() => {

        const restountriesAPI = async () => {
            const data = await fetch(requestURL + 'all', {method: 'GET'});

            const dataToJSON = await data.json();

            console.log(dataToJSON);
        }

        restountriesAPI();

    }, [])


    return(
        <div className="countries-list">
            Countries list
        </div>
    )
}

export default CountriesList;