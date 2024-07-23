import { Link } from "react-router-dom"

const Country = ({countryName, flag, population, region, capital, data}) => {
  return (
    <Link className={`country`} to={`/${countryName}`} state={data}>
    <img src={flag} alt={countryName} />
    <div className="countryDetails">
        <h5 className="countryName">{countryName}</h5>
        <div>
            <div className="otherDetails">Population: <span className="otherValue">{population}</span></div>
            <div className="otherDetails">Region: <span className="otherValue">{region}</span></div>
            <div className="otherDetails">Capital: <span className="otherValue">{capital}</span></div>
        </div>
    </div>
</Link>
  )
}

export default Country