import './Grid.css';
import React from "react";

function Grid ({mediaData, setCurrMedia}) {
    /* If single item is clicked, turn on single item view by setting the current media to the clicked media */
    function handleGridItemClick (event) {
        setCurrMedia(mediaData);
    }
    
    return(
        <div className="grid-card" onClick={handleGridItemClick}>
            <div className="grid-image">
                <img src={mediaData.image} alt="media"></img>
            </div>
            <div className="grid-label">
                <div className="grid-name"> {mediaData.name} </div>
                <div className="grid-media-type"> {mediaData.type} </div>
            </div>
        </div>
    )    
}

export default Grid;