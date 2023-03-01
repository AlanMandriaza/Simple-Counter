import React from "react";
import PropTypes from "prop-types";

const Navbar=(props)=>{

return(
 
<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid col-md-8">
                    <a className="navbar-brand" href="#">{props.boton1}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.boton2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.boton3}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.boton4}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">{props.boton5}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

);
};

Navbar.propTypes = {
    boton1: PropTypes.string,
    boton2: PropTypes.string,
    boton3: PropTypes.string,
    boton4: PropTypes.string,
    boton5: PropTypes.string,
  };
  
export default Navbar;