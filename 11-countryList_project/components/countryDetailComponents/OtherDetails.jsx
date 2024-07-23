import React from "react";

const OtherDetails = ({detailTitle, detailValue, Unikey}) => {
  if (typeof detailValue === "object") {
    if (detailTitle === "languages") {
      detailValue = Object.values(detailValue).join(', ')
    }else{
     detailValue =  Object.values(detailValue).map((value) =>{
        return value.name
      }).join(', ')
    }
  }

  return (
    <div className="otherDetails">
      {detailTitle}: <span className="otherValue">{detailValue}</span>
    </div>
  );
};

export default OtherDetails;
