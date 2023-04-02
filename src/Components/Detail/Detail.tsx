import {useState, useEffect} from 'react';
import DetailCard from '../DetailCard/DetailCard';
import Header from '../Header/Header';
import './Detail.css';

const requestURL = 'https://restcountries.com/v3.1/';

function Detail() {

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

    //console.log(country)

    return(
        <div>
            <Header />
            <div className="detail-wrapper">
                <button>
                    Back
                </button>
                { country ?
                    <div className="detail-info">
                        <img src={country.flags.svg}/>
                        <div className="detail-text-wrapper">
                            <h1>{countryName}</h1>
                            <div className="detail-columns">
                                <div className="detail-first-column">
                                    <strong>Native Name: </strong>
                                    {country.name.nativeName.eng.official
                                        ? country.name.nativeName.eng.official
                                        : 'No official native name in english'
                                    }
                                    <br/>
                                    <strong>Population: </strong>{country.population}
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
                                    <strong>Currencies: </strong>{country.currencies.NAD.name}
                                    <br/>
                                    <strong>Languages: </strong>{}
                                </div>
                            </div>
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