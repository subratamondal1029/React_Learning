import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const [isDark, setisDark] = useContext(ThemeContext)

  return (
    <header className={isDark ? "dark" : ""}>
      <h1>Where in the world?</h1>
      <div
        id="themeContainer"
        onClick={() => {
          setisDark((prev) => !prev);
          localStorage.setItem('isDark', !isDark)
        }}
      >
        <i className={`${isDark ? "fa-sun" : "fa-moon"} fa-solid`}></i>
        <span>{isDark ? "Light" : "Dark"} Mode</span>
      </div>
    </header>
  );
};

export default Header;
