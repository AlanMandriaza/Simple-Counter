import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
  return (
    <div className={props.clase}>
      <img src={props.cardurl} />
      <div className="card-body">
        <h5 className="card-title">{props.cardtittle}</h5>
        <p className="card-text">{props.cardtext}</p>
      </div>
      <div className="pie">
        <a href="#" className="btn btn-primary">
          {props.cardfooter}
        </a>
      </div>
    </div>
  );
};

Cards.propTypes = {
  cardtittle: PropTypes.string,
  cardtext: PropTypes.string,
  cardfooter: PropTypes.string,
  cardurl: PropTypes.string,
  clase:PropTypes.string,
};

export default Cards;
