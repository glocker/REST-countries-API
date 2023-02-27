import React, {useEffect, useState} from 'react';
import './CountriesList.css';

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList(): any {

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

    function search(items: any) {

        return items.filter((item: any) => {
            return searchParam.some((searchValue: any) => {

                if (query && item[searchValue]) {
                    if (item[searchValue].toString().toLowerCase().indexOf(query.toLowerCase()) > -1) {
                        return item[searchValue].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
                    }
                }
                else {
                    return countries;
                }
            })
        })
    }


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
                {search(countries).map((country: any) => {

                    return(
                        <div className="cards-list"
                             key={country.name.official}>
                            <div className="card-image">
                                <img className="image" src={country.flags.svg} alt=""/>
                            </div>
                            <div className="card-info">
                                <div className="card-title">{country.name.official}</div>
                                <div className="card-text">
                                    <div className="card-population">Population: {country.population.toLocaleString()}</div>
                                    <div className="card-region">Region: {country.region}</div>
                                    <div className="card-capital">Capital: {country.capital}</div>
                                </div>
                            </div>
                        </div>
                    )


                })}
            </div>
        </main>
    )
}

export default CountriesList;