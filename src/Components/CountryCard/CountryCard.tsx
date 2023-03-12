import './CountryCard.css';
import {ICard} from '../../Interfaces/Interfaces';


function CountryCard(props: ICard) {

    return(
        <div className="card-wrapper"
             key={props.data.name.official}>
            <div className="card-image">
                <img className="image" src={props.data.flags.svg} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-title">{props.data.name.official}</div>
                <div className="card-text">
                    <div className="card-population">Population: {props.data.population.toLocaleString()}</div>
                    <div className="card-region">Region: {props.data.region}</div>
                    <div className="card-capital">Capital: {props.data.capital}</div>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;