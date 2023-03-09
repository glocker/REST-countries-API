import React, {ChangeEvent, useEffect, useState} from 'react';
import './CountriesList.css';
import CountryCard from '../CountryCard/CountryCard';
import {ICountry} from '../../Interfaces/Interfaces';

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList(): any {

    const [countries, setCountries]: any = useState<object[]>([]);

    const [query, setQuery]: any = useState<string>("");

    const [searchParam]: any = useState<string|string[]>(['capital', 'name']);

    const [region, setRegion]: any = useState(['All']);

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

            if (item.region === region) {

                return searchParam.some((searchValue: string) => {

                    if (query && item[searchValue]) {
                        if (item[searchValue].toString().toLowerCase().indexOf(query.toLowerCase()) > -1) {
                            return item[searchValue].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
                        }
                    }

                    else if (region === 'All') {
                        return searchParam.some((selectedRegion: string) => {
                            if (selectedRegion && item[selectedRegion]) {
                                return item[selectedRegion].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
                            }
                        })
                    }
                })
            }

            // If we don't search or filter then return whole countries list
            else {
                return countries;
            }
        })
    }


    return(
        <main>
            <div className="controlsWrapper">
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
                <div className="div">
                    <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value)}
                            aria-label="Filter countries by region">
                        <option value="All">Filter By Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
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