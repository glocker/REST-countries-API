import {useState, useEffect} from 'react';
import DetailCard from '../DetailCard/DetailCard';

const requestURL = 'https://restcountries.com/v3.1/';

function Detail() {

    // Get country name for new request to grab more data for detail card
    const countryName: string = document.location.pathname.slice(1).replace(/_/g," ");

    const [country, setCountry]: any = useState('');

    useEffect(() => {

        const getCountry: any = async () => {
            const data = await fetch(requestURL + 'name/' + countryName + '?fullText=true', {method: 'GET'});

            const [dataToJSON] = await data.json();

            setCountry(dataToJSON);
        }

        getCountry();

    }, []);

    console.log(country);


    return(
        <div>
            <h1>Detail Component</h1>
            <div>{countryName}</div>
            <DetailCard data={country} />
        </div>
    )
}

export default Detail;