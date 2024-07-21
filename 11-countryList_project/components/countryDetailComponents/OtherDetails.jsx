import React from "react";

const OtherDetails = ({detailTitle, detailValue, Unikey}) => {
function handleMultipleValues(){
  if (detailValue.length !== 1) {
    return detailValue.map((value) => `${value.name} `)
    
  }else return detailValue[0].name
}


  return (
    <div className="otherDetails" key={Unikey}>
      {detailTitle}: <span className="otherValue">{
        detailValue && typeof detailValue[0] === "object" ? handleMultipleValues() : detailValue
    }</span>
    </div>
  );
};

export default OtherDetails;
