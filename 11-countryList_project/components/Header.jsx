import { useState } from "react"

const Header = ({themeState}) => {
  const [theme, setTheme] = themeState

  function switchTheme(e){

    if (theme.buttonclass === "fa-regular") {
      setTheme({themeColor: "dark", buttonclass: "fa-solid"})
    }else{
      setTheme({buttonclass: "fa-regular", themeColor: "light"})
    }
  }
  return (
    <header className={`${theme.themeColor}Mode`}>
        <h1>Where in the world?</h1>
        <div id="themeContainer">
        <i className={`${theme.buttonclass} fa-moon`} onClick={switchTheme}></i>
            <span>{theme.themeColor} Mode</span>
        </div>
    </header>
  )
}

export default Header