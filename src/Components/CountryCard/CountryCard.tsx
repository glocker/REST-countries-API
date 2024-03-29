import './CountryCard.css';
import {ICard} from '../../Interfaces/Interfaces';
import {Link} from "react-router-dom";


function CountryCard(props: ICard) {

    const cardName: string = props.data.name.official.replace(/ /g,"_");

    return(
        <div className="card-wrapper"
             key={props.data.name.official}>
            <Link to={cardName} className="card-link">
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
            </Link>
        </div>
    )
}

export default CountryCard;