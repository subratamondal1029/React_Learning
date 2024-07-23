import { useEffect, useState } from "react";
import Country from "./Country";
import HomeSemer from "./HomeSemer";

const CountryList = ({ query, theme }) => {

  const [CountryData, setCountryData] = useState([])

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
     setCountryData(data)
    })
  },[])

  const filteredCountries = CountryData.filter((country) => {
    return query.name
      ? country.name.common.toLowerCase().includes(query.name.toLowerCase())
      : country.region.toLowerCase().includes(query.region.toLowerCase());
  }).map((country, i) => (
    <Country
      Unikey={country.name.common}
      countryName={country.name.common}
      flag={country.flags.svg}
      population={country.population}
      region={country.region}
      capital={country.capital}
      theme={`${theme}Mode`}
    />
  ));

  let simmerCard = []
  for (let i = 0; i < 10; i++) {
    simmerCard.push(<HomeSemer theme={theme}/>)
  }

  return <div id="countryContainer">{
    filteredCountries.length === 0 ? simmerCard : filteredCountries

  }</div>;
};

export default CountryList;
