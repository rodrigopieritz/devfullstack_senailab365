import React, { useContext } from "react";
import "./Banner.css";
import { BannerContext } from "../../context/BannerContext/BannerContext";

const Banner = () => {
  const { title, subtitle } = useContext(BannerContext);

  return (
    <div className="container-fluid bg-dark">
      <div className="banner-text-main">{title}</div>
      <div className="banner-text-secondary">{subtitle}</div>
    </div>
  );
};

export default Banner;



/*

import React from "react";
import "./Banner.css"
import { BannerContext } from "../../BannerContext/BannerContext";


const Banner= () => {
    const {title, subtitle} = useContext (BannerContext);
    return ( 
        <div class="container-fluid bg-dark"> 
            <div class="banner-text-main">{title}</div>
        <div class= "banner-text-secondary">{subtitle}</div>
         </div>
     );
}

Banner.propTypes ={
    texto1: PropTypes.string.isRequired,
    texto2:PropTypes.string.isRequired,
}

export default Banner;

*/