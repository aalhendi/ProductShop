// Style
import { GlobalStyle } from "./styles";
// Components
import NavBar from "./components/NavBar.js";
//Imports
import { ThemeProvider } from "styled-components";
import Routes from "./components/Routes";

//State & Store
import { useState } from "react";
import { observer } from "mobx-react-lite";
import producerStore from "./stores/producerStore";
import productStore from "./stores/productStore";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      {productStore.loading || producerStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
