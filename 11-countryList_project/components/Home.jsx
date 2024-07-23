import Nav from "./Nav";
import CountryList from "./CountryList";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const queryState = useState({ name: "", region: "" });
    const isDark = useOutletContext()

  return (
    <main className={isDark ? "dark" : ""}>
        <div id="homeContainer">
          <Nav queryState={queryState}/>
          <CountryList query={queryState[0]}/>
        </div>
      </main>
  )
}

export default Home