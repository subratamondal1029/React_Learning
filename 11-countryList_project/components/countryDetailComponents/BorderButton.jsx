const BorderButton = ({countryName, theme}) => {
  return (
   <a href={`/countryDetail?countryName=${countryName}`}><button className={`borderCountry ${theme}`}>{countryName}</button></a> 
  )
}

export default BorderButton