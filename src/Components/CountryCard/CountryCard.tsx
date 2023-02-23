import './CountryCard.css';

interface ICountry {
    name: {
        official: string
    },
    flags: {
        svg: string
    },
    population: string,
    region: string,
    capital: string
}

function CountryCard(props: any) {
    console.log(props)
    return (
        props.data.map((country: ICountry) => {

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

        })
    )
}

export default CountryCard;