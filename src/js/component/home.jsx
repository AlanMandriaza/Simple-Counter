import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
  return (
    <div>
      <Navbar
        boton1="Start Boostrap"
        boton2="Home"
        boton3="About"
        boton4="Services"
        boton5="Contact"
      />
     
      <Jumbotron
        tittle="A Warm Welcome!"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, 
               in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur 
               vitae fugiat numquam repellat"
        label="Call the action!"
      />

      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <Cards
          cardurl="https://picsum.photos/id/1/500/325"
          cardtittle="Card title 1"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          cardfooter="Find Out More!1"
          clase="col-md-2  card iqz text-center"
        />
        <Cards
          cardurl="https://picsum.photos/id/2/500/325"
          cardtittle="Card title 2"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          cardfooter="Find Out More!2"
          clase="col-md-2  card  text-center"
        />
        <Cards
          cardurl="https://picsum.photos/id/3/500/325"
          cardtittle="Card title 3"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          cardfooter="Find Out More!3"
          clase="col-md-2  card  text-center"
        />
        <Cards
          cardurl="https://picsum.photos/id/4/500/325"
          cardtittle="Card title 4"
          cardtext="Some quick example text to build on the card title and make up the bulk of the card's content."
          cardfooter="Find Out More!4"
          clase="col-md-2 card der text-center"/>
      </div>
      

      
      <Footer
      
      clase="col-12 justify-content-center"
    clase2="col-12 foter d-flex justify-content-center"
     texto="Copyright &copy; Your Website 2023"/>
      
     
      </div>

  );
};

export default Home;
