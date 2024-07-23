import { Link } from "react-router-dom"

const BorderButton = ({countryName, theme}) => {
  return (
   <Link to={`/${countryName}`}><button className={`borderCountry ${theme}`}>{countryName}</button></Link>
  )
}

export default BorderButton