import { useState } from "react";

const SortField = ({queryState}) => {
  const [sortOptionelm, setsortOptionelm] = useState(false)
  const [selectRegion, setSelectRegion] = useState("Filter By Region")
  const [query, setQuery] = queryState

  function getFilterOption(e){
    const clickTarget = e.target.tagName
    if (clickTarget === "P" || e.target.id === "sortByField" || clickTarget === "I") {
      setsortOptionelm(!sortOptionelm)
    }else{
      if (e.target.id !== "sortOptions") {
        const SelectedRegion = e.target.textContent;
        setSelectRegion(SelectedRegion)
        setsortOptionelm(!sortOptionelm)
        setQuery({...query, region:SelectedRegion})
      }
    }
  }

  return (
    <div id="sortByField"  onClick={getFilterOption}>
      <p>{selectRegion}</p>
      <i className="fa-solid fa-caret-down"></i>

     {sortOptionelm && <div id="sortOptions">
        <div className="option">Africa</div>
        <div className="option">America</div>
        <div className="option">Asia</div>
        <div className="option">Europe</div>
        <div className="option">Oceania</div>
      </div>}
    </div>
  );
};

export default SortField;
