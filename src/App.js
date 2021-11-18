import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./pages/index";
import CTA from "./components/CTA/CTA";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
        <Home path="home" component={Home} exact />
        {/* </Switch> */}
        <Banner />
        <CTA></CTA>
        <br />
        {/* <h1 className="aboutHeader">HEADING 1</h1> */}
        <About />
        <Banner />
        <Banner />
      </Router>
    </>
  );
}

export default App;
