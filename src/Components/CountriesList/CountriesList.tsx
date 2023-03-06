import React, {useEffect, useState} from 'react';
import './CountriesList.css';
import CountryCard from '../CountryCard/CountryCard';
import {ICountry} from '../../Interfaces/Interfaces';

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList(): any {

    const [countries, setCountries]: any = useState<object[]>([]);

    const [query, setQuery]: any = useState<string>("");

    const [searchParam]: any = useState<string|string[]>(['capital', 'name']);

    useEffect(() => {

        const restCountriesAPI = async () => {
            const data = await fetch(requestURL + 'all', {method: 'GET'});

            const dataToJSON = await data.json();

            setCountries(dataToJSON);
        }

        restCountriesAPI();

    }, [])

    function search(items: object[]): any {

        return items.filter((item: any) => {
            return searchParam.some((searchValue: string) => {

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
                { search(countries).map((country: ICountry) => {

                    // For each country (searched or from full list) render country card
                    return <CountryCard
                                data={country}
                                key={country.name.official} />
                })}
            </div>
        </main>
    )
}

export default CountriesList;