import React, {useEffect, useState} from 'react';
import './CountriesList.css';

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {

        const restCountriesAPI = async () => {
            const data = await fetch(requestURL + 'all', {method: 'GET'});

            const dataToJSON = await data.json();

            console.log(dataToJSON)
            setCountries(dataToJSON);
        }

        restCountriesAPI();

    }, [])


    return(
        <div className="countries-list">
            Countries list:
            {
                countries.map((countriesData: any) => {
                    return(
                        <div key={countriesData.name.official}>{countriesData.name.official}</div>
                    )
                })
            }
        </div>
    )
}

export default CountriesList;