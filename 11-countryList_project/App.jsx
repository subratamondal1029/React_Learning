import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const App = () => {
  const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDark')));

  return (
    <>
      <Header theme={[isDark, setisDark]}/>
    <Outlet context={isDark}/>
    </>
  );
};

export default App;
