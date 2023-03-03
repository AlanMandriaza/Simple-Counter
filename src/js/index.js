import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types";
import "../styles/index.css";

function SecondsCounter(props) {
  return (
    <>
      <section class="container">


        <p id="seconds">{props.horas}</p>
        <p id="seconds">{props.minutos}</p>
        <p id="seconds">{props.segundos}</p>


      </section>
    </>
  );
}

SecondsCounter.propTypes = {
  segundos: PropTypes.number.isRequired,
  minutos: PropTypes.number.isRequired,
  horas: PropTypes.number.isRequired,
};

let segundos = 0;
let minutos = 0;
let horas = 0;

setInterval(function () {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }else if (minutos===60){
    minutos = 0;
    horas++;
  }

  ReactDOM.render(
    <SecondsCounter segundos={segundos} horas={horas} minutos={minutos} />,
    document.querySelector("#app")
  );
}, 1000);




