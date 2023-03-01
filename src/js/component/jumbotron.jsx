import React from "react";
import PropTypes from "prop-types";
const Jumbotron = (props) => {
  return (
    
    <div className="jumbotron jumbotron-fluid">
    <div className="container-md jumb">
      <h1>{props.tittle}</h1>
      <p>{props.description}</p>
      <a href="#" className="btn btn-primary">{props.label}</a>
    </div>
  </div>
    
  );
};


Jumbotron.propTypes={
  tittle:PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  };
  export default Jumbotron;

  