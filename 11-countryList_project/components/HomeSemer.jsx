const HomeSemer = ({theme}) => {
  return (
    <div className={`country ${theme}`} key={Date.now()} style={{
      backgroundColor:"gray",
      height: '500px'
    }}>
    <div className="countryDetails">
    </div>
    </div>
  )
}

export default HomeSemer