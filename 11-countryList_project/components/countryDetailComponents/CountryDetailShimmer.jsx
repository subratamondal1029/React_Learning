import { Link } from "react-router-dom";
import "./CountryDetailShimmer.css"

const CountryDetailShimmer = ({theme}) => {
  return (
      <div id="detailsContainer">
        <Link id="backBtn" className={theme} to="/">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>

        <div id="countryDetailsCon">
          <div className="simmerBox image"></div>

          <div className="countryDetails">
            <h5 className="countryName simmerBox"></h5>
            <div id="otherDetailsCon">
              <div className="shimmerCon">
                {
                Array.from({length:5})
                .map((ie, i) =>{
                  return <div className="simmerBox" key={i+300}></div>
                })
                }
              </div>
              <div className="shimmerCon">
              {
                Array.from({length:3})
                .map((ie,i) =>{
                  return <div className="simmerBox" key={i+306}></div>
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CountryDetailShimmer;
