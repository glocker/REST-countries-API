import React, {useEffect, useState} from 'react';
import './CountriesList.css';
import CountryCard from '../CountryCard/CountryCard';

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList(): any {

    function search(items: any) {
        return items.filter((item: any) => {
            return searchParam.some((searchValue: any) => {
                return (
                    item[searchValue] 
                    ? item[searchValue].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
                    : null
                )
            })
        })
    }

    const [countries, setCountries]: any = useState([]);

    const [query, setQuery]: any = useState("");

    const [searchParam]: any = useState(['capital', 'name']);

    useEffect(() => {

        const restCountriesAPI = async () => {
            const data = await fetch(requestURL + 'all', {method: 'GET'});

            const dataToJSON = await data.json();

            setCountries(dataToJSON);
        }

        restCountriesAPI();

    }, [])


    return(
        <main>
            <div className="searchBar">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for a country..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
            </div>
            <div className="countries-list">
                <CountryCard data={countries} />
            </div>
        </main>
    )
}

export default CountriesList;