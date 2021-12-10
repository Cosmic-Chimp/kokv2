import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import AbtV2 from "./components/Abtv2/Abtv2";
import Posts from "./components/Posts/Posts";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import Form from "./components/Form/Form";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Router> */}
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={AbtV2} />
          <Route path="/recipes" exact component={Posts} />
          <Route path="/contact" exact component={Footer} />
        </Switch>
      </Router> */}
      <Home />
      <AbtV2 />
      <Posts />
      <Form />
      <Footer />
    </>
  );
}

export default App;
