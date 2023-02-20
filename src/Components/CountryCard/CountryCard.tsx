import './CountryCard.css';

interface ICountry {
    name: {
        official: string
    },
    flags: {
        svg: string
    }
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
                        <div className="card-text"></div>
                    </div>
                </div>
            )

        })
    )
}

export default CountryCard;