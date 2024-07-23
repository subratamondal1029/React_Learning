import { Link, useParams } from "react-router-dom";
import data from "../data.js";
import BorderButton from "./countryDetailComponents/BorderButton.jsx";
import OtherDetails from "./countryDetailComponents/OtherDetails.jsx";
import { useEffect, useState } from "react";

const CountryDetail = ({ theme }) => {
  const {countryDetail: countryName} = useParams()
  const [country, setcountryDetails] = useState({})
  
  useEffect(() =>{
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([data]) => {
      const countryDetails ={
        name: data.name.common,
        flag: data.flags.svg,
        nativeName: Object.values(data.name.nativeName)[0].common,
        population: data.population,
        region: data.region,
        subregion: data.subregion,
        capital: data.capital ?  data.capital[0] : "NA",
        topLevelDomain: data.tld[0],
        currencies: data.currencies,
        languages: data.languages,
        borders: []
      }
      setcountryDetails(countryDetails)

      if (data.borders) {
        Promise.all(data.borders.map((border) =>{
          return fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`)
          .then(res => res.json())
          .then(([data]) => {
            return data.name.common
          })
          })).then(countryName =>{
            setcountryDetails((prev) => ({...prev, borders: countryName}))
          })
      }
    })
  },[countryName])

  const countryDetails1 = [
    "native_Name",
    "population",
    "region",
    "sub_region",
    "capital",
  ];

  const detailsArr1 = countryDetails1.map((data, i) => {
    return (
      Object.keys(country).length !== 0 &&
      <OtherDetails
        Unikey={Date.now()}
        detailTitle={data.replaceAll("_", " ")}
        detailValue={country[data.replaceAll("_", "")]}
      />
      
    );
  });

  const countryDetails2 = ["top_Level_Domain", "currencies", "languages"];

  const detailsArr2 = countryDetails2.map((data, i) => {
    return (
      Object.keys(country).length !== 0 &&
      <OtherDetails
        Unikey={Date.now()}
        detailTitle={data.replaceAll("_", " ")}
        detailValue={country[data.replaceAll("_", "")]}
      />
    );
  });

  return (
    Object.keys(country).length !== 0 &&
    <main className={theme}>
      <div id="detailsContainer">
        <Link id="backBtn" className={theme} to="/">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>

        <div id="countryDetailsCon">
          <img src={country.flag} alt={country.name} />

          <div className="countryDetails">
            <h5 className="countryName">{country.name}</h5>
            <div id="otherDetailsCon">
              <div>{detailsArr1}</div>
              <div>{detailsArr2}</div>
            </div>
            {country.borders.length !==0 ?
            <div id="borderContainer">
              <div className="otherDetails">Border Countries: </div>
              {
                country.borders.map((border) =>{
                return  <BorderButton countryName={border} theme={theme} />
                })
              }
               
            </div>
             : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
