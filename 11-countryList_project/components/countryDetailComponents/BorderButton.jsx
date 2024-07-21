import { Link } from "react-router-dom"

const BorderButton = ({countryName, theme}) => {
  return (
   <Link to={`/countryDetail?countryName=${countryName}`}><button className={`borderCountry ${theme}`}>{countryName}</button></Link>
  )
}

export default BorderButton