import Nav from "./Nav";
import CountryList from "./CountryList";
import { useContext, useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const queryState = useState({ name: "", region: "" });
  const [isDark] = useTheme()


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