import PropTypes from "prop-types";
import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className={props.clase}>
        <div className={props.clase2}>
          <p>{props.texto}</p>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  clase: PropTypes.string,
  clase2: PropTypes.string,
  texto: PropTypes.string,
};

export default Footer;
