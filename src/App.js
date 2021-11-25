import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./pages/index";
import CTA from "./components/CTA/CTA";
// import About from "./components/About/About";
import AbtV2 from "./components/Abtv2/Abtv2";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
        {/* <Route exact path="/"> */}
        <Home />
        {/* </Route> */}
        {/* </Switch> */}
        <Banner />
        <CTA></CTA>
        <br />
        <AbtV2></AbtV2>
        {/* <About /> */}
        <Posts />
        <Footer />
      </Router>
    </>
  );
}

export default App;
