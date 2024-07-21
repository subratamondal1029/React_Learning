import Country from "./Country";
import CountryData from "../data";
import HomeSemer from "./HomeSemer";

const CountryList = ({ query, theme }) => {

  const filteredCountries = CountryData.filter((country) => {
    return query.name
      ? country.name.toLowerCase().includes(query.name.toLowerCase())
      : country.region.toLowerCase().includes(query.region.toLowerCase());
  }).map((country, i) => (
    <Country
      key={i}
      countryName={country.name}
      flag={country.flag}
      population={country.population}
      region={country.region}
      capital={country.capital}
      theme={`${theme}Mode`}
    />
  ));

  let simmerCard = []
  for (let i = 0; i < 10; i++) {
    simmerCard.push(<HomeSemer Unikey={i+1} theme={theme}/>)
  }

  return <div id="countryContainer">{
    filteredCountries.length === 0 ? simmerCard : filteredCountries

  }</div>;
};

export default CountryList;
