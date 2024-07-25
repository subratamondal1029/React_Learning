import { Link } from "react-router-dom";
import "./CountryDetailShimmer.css"
import { useTheme } from "../../hooks/useTheme";

const CountryDetailShimmer = () => {
const [isDark] = useTheme()

  return (
      <div id="detailsContainer">
        <Link id="backBtn" className={isDark ? "dark" : ""}>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>

        <div className="country-details shimmer">
      <div className="flag"></div>
      <div className="details-text-container">
        <h1 className="title"></h1>
        <div className="">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default CountryDetailShimmer;
