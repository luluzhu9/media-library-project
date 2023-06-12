import DefaultLogo from '../media/cube-default.gif';
import './Logo.css'
import React from "react";

function Logo () {
    return(
        <div className="logo-container">
            <img className="logo" src={DefaultLogo} alt="default logo"/>
        </div>
    );
}

export default Logo;
