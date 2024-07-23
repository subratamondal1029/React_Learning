import { Link } from "react-router-dom"

const BorderButton = ({countryName}) => {
  return (
   <Link to={`/${countryName}`}><button className={`borderCountry`}>{countryName}</button></Link>
  )
}

export default BorderButton