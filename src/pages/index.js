import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import SideBar from "../components/SideBar/SideBar";
import Banner from "../components/Banner/Banner";
import CTA from "../components/CTA/CTA";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {/* <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Banner />
      <CTA></CTA>
    </>
  );
};

export default Home;
