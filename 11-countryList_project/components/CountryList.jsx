import Country from "./Country";
import CountryData from "../data";

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

  return <div id="countryContainer">{filteredCountries}</div>;
};

export default CountryList;
