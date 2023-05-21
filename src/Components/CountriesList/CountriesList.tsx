import {ChangeEvent, useEffect, useState, useContext} from 'react';
import './CountriesList.css';
import CountryCard from '../CountryCard/CountryCard';
import {ICountry} from '../../Interfaces/Interfaces';
import Header from '../Header/Header';
import { ThemeContext } from '../ThemeContext/ThemeContext'

const requestURL = 'https://restcountries.com/v3.1/';

function CountriesList(): any {

    const test = useContext(ThemeContext);

    console.log('Context in CountriesList is : ' + test.theme);

    const [countries, setCountries]: any = useState<object[]>([]);

    const [query, setQuery]: any = useState<string>("");

    const [searchParam]: any = useState<string|string[]>(['capital', 'name']);

    const [region, setRegion]: any = useState('All');

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
                    return (
                        item[searchValue]
                            ? item[searchValue]
                                .toString()
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                            : null
                    );
                });
            } else if (region === "All") {
                return searchParam.some((selectedRegion: string) => {
                    return (
                        item[selectedRegion]
                            ? item[selectedRegion]
                                .toString()
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                            : null
                    );
                });
            }
        });
    }


    return(
        <div>
            <Header />
            <main>
                <div className="controlsWrapper">
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
                    <div className="dropdownSelector">
                        <select onChange={(e: ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value)}
                                aria-label="Filter countries by region">
                            <option value="All">Filter By Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
                <div className="countries-list">
                    { search(countries).map((country: ICountry) => {

                        // For each country (searched or from full list) render country card
                        return <CountryCard data={country} key={country.name.official} />
                    })}
                </div>
            </main>
        </div>
    )
}

export default CountriesList;