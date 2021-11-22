import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./pages/index";
import CTA from "./components/CTA/CTA";
// import About from "./components/About/About";
import AbtV2 from "./components/Abtv2/Abtv2";
import Footer from "./components/Footer/Footer";
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
        <AbtV2></AbtV2>
        {/* <h1 className="aboutHeader">HEADING 1</h1> */}
        {/* <About /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
