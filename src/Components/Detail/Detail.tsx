import {useState, useEffect, useContext} from 'react';
import DetailCard from '../DetailCard/DetailCard';
import Header from '../Header/Header';
import './Detail.css';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const requestURL = 'https://restcountries.com/v3.1/';

function Detail() {

    const test = useContext(ThemeContext);

    console.log('Context in Detail is : ' + test.theme);

    // Get country name for new request to grab more data for detail card
    const countryName: string = document.location.pathname.slice(1).replace(/_/g," ");

    const [country, setCountry]: any = useState('');

    useEffect(() => {

        const getCountry = async () => {
            const data = await fetch(requestURL + 'name/' + countryName + '?fullText=true', {method: 'GET'});

            const [dataToJSON] = await data.json();

            setCountry(dataToJSON);
        }

        getCountry();

    }, []);

    function getCurrencies(currencies: object) {

        const currenciesList: string[] = [];
            for (const key in currencies) {

                if (currencies.hasOwnProperty(key)) {
                    // @ts-ignore
                    currenciesList.push(currencies[key].name)
                }
            }
            return currenciesList?.join(', ');
    }

    function getLanguages(languages: object) {

        const languagesList: string[] = [];

        Object.values(languages).forEach(lang => languagesList.push(lang))
        return languagesList?.join(', ');
    }

    function backButtonHandler() {
        window.history.back();
    }

    return(
        <div>
            <Header />
            <div className="detail-wrapper">
                <button className="detail-backButton" 
                        onClick={backButtonHandler}>
                &#8592;&nbsp;Back
                </button>
                { country ?
                    <div className="detail-info">
                        <img src={country.flags.svg}/>
                        <div className="detail-text-wrapper">
                            <h1>{countryName}</h1>
                            <div className="detail-columns">
                                <div className="detail-first-column">
                                    <strong>Native Name: </strong>
                                    {country.name.nativeName?.eng?.official
                                        ? country.name.nativeName.eng.official
                                        : 'No official native name in english'
                                    }
                                    <br/>
                                    <strong>Population: </strong>{country.population.toLocaleString()}
                                    <br/>
                                    <strong>Region: </strong>{country.region}
                                    <br/>
                                    <strong>Sub Region: </strong>{country.subregion}
                                    <br/>
                                    <strong>Capital: </strong>{country.capital[0]}
                                </div>
                                <div className="detail-second-column">
                                    <strong>Top Level Domain: </strong>{country.tld[0]}
                                    <br/>
                                    <strong>Currencies: </strong>{getCurrencies(country.currencies)}
                                    <br/>
                                    <strong>Languages: </strong>{getLanguages(country.languages)}
                                </div>
                            </div>
                            
                                {
                                    country.borders.length 
                                    ? 
                                    <div className="detail-borders">
                                        <strong>Border Countries:</strong>
                                        {
                                            country.borders.map((neighborName: string) => neighborName)
                                        }
                                    </div>
                                    : null
                                }
                        </div>
                    </div>

                    : null
                }
                {/*
                 <DetailCard data={country} />
                 */}
            </div>
        </div>
    )
}

export default Detail;