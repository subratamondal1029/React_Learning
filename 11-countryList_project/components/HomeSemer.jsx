import React from 'react'

const HomeSemer = ({theme, Unikey}) => {
  return (
    <div className={`country ${theme}`} key={Unikey}>
    <img src={flag} alt={countryName} />
    <div className="countryDetails">
    </div>
</div>
  )
}

export default HomeSemer