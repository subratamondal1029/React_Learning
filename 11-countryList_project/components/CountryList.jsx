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
      key={country.name.common}
      countryName={country.name.common}
      flag={country.flags.svg}
      population={country.population}
      region={country.region}
      capital={country.capital}
      theme={`${theme}Mode`}
      data={country}
    />
  ));

  const simmerCard =  Array.from({length:10})
  .map((it, i) => <HomeSemer theme={theme} key={i+260}/>)

  return <div id="countryContainer">{
    !filteredCountries.length ? simmerCard : filteredCountries

  }</div>;
};

export default CountryList;
