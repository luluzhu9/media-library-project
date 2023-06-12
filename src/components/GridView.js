import GridIconDefault from '../media/grid-icon-default.png';
import GridIconActive from '../media/grid-icon-active.png';
import './GridView.css';
import React from "react";

function GridView ({setGridIsShown, gridIsShown}) {
    /* Set grid view on and update grid icon to active */
    function handleGrid (event) {
        setGridIsShown(true);
        document.getElementsByClassName("grid-icon-default")[0].src = GridIconActive;
    }

    return (
        <div>
            {gridIsShown && (
                <div className="grid-view">
                    <img className="grid-icon-default" src={GridIconActive} alt="active grid icon" onClick={handleGrid}/>
                </div>
            )}

            {!gridIsShown && (
                <div className="grid-view">
                    <img className="grid-icon-default" src={GridIconDefault} alt="default grid icon" onClick={handleGrid}/>
                </div>
            )}
        </div>

        
    );

}

export default GridView;
