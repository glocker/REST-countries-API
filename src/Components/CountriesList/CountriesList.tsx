import React, {useEffect, useState} from 'react';
import './CountriesList.css';
import CountryCard from '../CountryCard/CountryCard'

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList(): any {

    const [countries, setCountries]: any = useState([]);

    useEffect(() => {

        const restCountriesAPI = async () => {
            const data = await fetch(requestURL + 'all', {method: 'GET'});

            const dataToJSON = await data.json();

            setCountries(dataToJSON);
        }

        restCountriesAPI();

    }, [])


    return(
        <div className="countries-list">
            <CountryCard data={countries} />
        </div>
    )
}

export default CountriesList;