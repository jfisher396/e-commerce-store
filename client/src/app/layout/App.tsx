import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const paletteModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header paletteModeHandler={paletteModeHandler}></Header>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog/:id" component={ProductDetails} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
