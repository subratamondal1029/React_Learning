import { Link } from "react-router-dom";
import data from "../data.js";
import BorderButton from "./countryDetailComponents/BorderButton.jsx";
import OtherDetails from "./countryDetailComponents/OtherDetails.jsx";

const CountryDetail = ({ theme }) => {
  const countryName = new URLSearchParams(location.search).get("countryName");
  const country = data.filter((country) => country.name === countryName)[0];

  const countryDetails1 = [
    "native_Name",
    "population",
    "region",
    "sub_region",
    "capital",
  ];

  const detailsArr1 = countryDetails1.map((data, i) => {
    return (
      <OtherDetails
        Unikey={i}
        detailTitle={data.replaceAll("_", " ")}
        detailValue={country[data.replaceAll("_", "")]}
      />
    );
  });

  const countryDetails2 = ["top_Level_Domain", "currencies", "languages"];

  const detailsArr2 = countryDetails2.map((data, i) => {
    return (
      <OtherDetails
        Unikey={i + 6}
        detailTitle={data.replaceAll("_", " ")}
        detailValue={country[data.replaceAll("_", "")]}
      />
    );
  });

  return (
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

            <div id="borderContainer">
              <div className="otherDetails">Border Countries: </div>
              {country.borders
                ? data
                    .filter((countryDetails) =>
                      country.borders.includes(countryDetails.alpha3Code)
                    )
                    .map((country) => (
                      <BorderButton countryName={country.name} theme={theme} />
                    ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
