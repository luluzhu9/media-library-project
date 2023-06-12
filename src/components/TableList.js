import './TableList.css';
import React from "react";

function TableList ({mediaData, setCurrMedia}) {
    /* If single item is clicked, turn on single item view by setting the current media to the clicked media */
    function handleListItemClick (event) {
        setCurrMedia(mediaData);
    }
    
    return(
        <div className="card" onClick={handleListItemClick}>
            <div className="inner-card">
                <div className="image">
                    <img src={mediaData.image} alt="media"></img>
                </div>
                <div className="media-tablelist-type"> {mediaData.type} </div>
                <div className="name"> {mediaData.name} </div>
            </div>
            <hr />
        </div>
    );
}

export default TableList;