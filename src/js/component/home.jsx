import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Body from "./body.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
