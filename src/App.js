import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./pages/index";
import CTA from "./components/CTA/CTA";
import AbtV2 from "./components/Abtv2/Abtv2";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/home" exact component={Home} />
          {/* <Home /> */}
          <Route path="/about" exact component={AbtV2} />
          {/* <Banner />
          <CTA></CTA> */}
          <br />
          {/* <AbtV2></AbtV2> */}
          <Route path="/recipes" exact component={Posts} />
          {/* <Route path="/contact" exact component={AboutV2} /> */}

          <Posts />
          <Footer />
        </Switch>
      </Router>
    </>
  );
}

export default App;
