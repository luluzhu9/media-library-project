import ListIconDefault from '../media/list-icon-default.png';
import ListIconActive from '../media/list-icon-active.png';
import './ListView.css';
import React from "react";


function ListView ({setGridIsShown, gridIsShown}) {
    /* Set list view on and update list icon to active */
    function handleList (event) {
        setGridIsShown(false);
        document.getElementsByClassName("list-icon-default")[0].src = ListIconActive;
    }

    return (
        <div>
            {gridIsShown && (
                <div className="list-view">
                    <img className="list-icon-default" src={ListIconDefault} alt="default list icon" onClick={handleList}/>
                </div>
            )}

            {!gridIsShown && (
                <div className="list-view">
                    <img className="list-icon-default" src={ListIconActive} alt="active list icon" onClick={handleList}/>
                </div>
            )}
        </div>
    );

}

export default ListView;
