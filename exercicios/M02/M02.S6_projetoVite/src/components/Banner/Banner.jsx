import React from "react";
import PropTypes from "prop-types";
import "./Banner.css"


function Banner(props) {
    return ( 
        <div class="container-fluid bg-dark border-bottom border-bottom-dark"> 
            <div class="banner-text-main">{props.texto1}</div>
        <div class= "banner-text-secondary">{props.texto2}</div>
         </div>
     );
}

Banner.propTypes ={
    texto1: PropTypes.string.isRequired,
    texto2:PropTypes.string.isRequired,
}

export default Banner;