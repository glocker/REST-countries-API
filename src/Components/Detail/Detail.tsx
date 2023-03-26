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
                <div className="detail-info">
                    <div className="detail-flag">
                        <img src={country.flags.svg} />
                    </div>
                    <div className="detail-info">
                        <div>{countryName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;