import { Link } from "react-router-dom"

const Country = ({Unikey, countryName, flag, population, region, capital, theme}) => {
  return (
    <Link className={`country ${theme}`} key={Unikey} to={`/${countryName}`}>
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