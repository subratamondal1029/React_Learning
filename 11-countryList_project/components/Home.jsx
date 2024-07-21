import Nav from "./Nav";
import CountryList from "./CountryList";
import { useState } from "react";

const Home = () => {
   const themeState = [{themeColor:'dark'}]
    const queryState = useState({ name: "", region: "" });
  return (
    <main className={`${themeState[0].themeColor}Mode`}>
        <div id="homeContainer">
          <Nav queryState={queryState} theme={themeState[0].themeColor}/>
          <CountryList query={queryState[0]} theme={themeState[0].themeColor}/>
        </div>
      </main>
  )
}

export default Home