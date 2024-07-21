import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const App = () => {
  const themeState = useState({buttonclass: "fa-solid", themeColor: "dark"});
  return (
    <>
      <Header themeState={themeState}/>
    <Outlet />
    </>
  );
};

export default App;
