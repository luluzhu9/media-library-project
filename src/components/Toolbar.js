import React, {useState} from 'react';
import './Toolbar.css';
import ListView from './ListView.js';
import GridView from './GridView.js'
import Checkbox from './Checkbox';
import CloseIcon from '../media/close-icon.png'

function Toolbar ({allMediasData, setMediasHandler, setGridIsShown, gridIsShown, medias}) {
    /* If filter overlay is open */
    const [overlayIsShown, setOverlayIsShown] = useState(false);
    /* If anything in the filter overlay has been clicked */
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    /* List of filter options */
    const toFilterLines = ["Film", "Show", "Book"];

    /* Filter medias for search bar */
    function filterMedias (event) {
        const value = event.target.value.toLowerCase();
        const filteredMedias = allMediasData.filter(
            media => (`${media.name}`.toLowerCase().includes(value))
        );
        setMediasHandler(filteredMedias);

        if(value.length === 0){
            setMediasHandler(allMediasData);
        }
    }

    /* Open overlay */
    function handleFilterOverlay (event) {
        setOverlayIsShown(true);
    }

    /* Closing overlay */
    function handleExit (event) {
        setOverlayIsShown(false);
        setHasBeenClicked(false);
    }

    return(
        <div className="toolbar-container">
            <div className="before-hr">
                <div className="search-container">
                    <input className="search-bar" type="search" placeholder="Search" onChange={filterMedias}/>
                </div>
                <div className="list-view-container">
                    <ListView setGridIsShown={setGridIsShown} gridIsShown={gridIsShown}/>
                </div>
                <div className="grid-view-container"> 
                    <GridView setGridIsShown={setGridIsShown} gridIsShown={gridIsShown}/>
                </div>
                <div className="filter-text-container" onClick={handleFilterOverlay}>
                    <p>Filter</p>
                </div>

                {overlayIsShown && (
                    <div className="filter-overlay">
                        <div className="filter-x">
                            <p>Filter</p>
                            <img src={CloseIcon} alt="close-icon" onClick={handleExit}></img>
                        </div>
                        <p className="media-type">Categories</p>
                        <div className="media-type-options">
                            {toFilterLines.map((line) => (
                                <Checkbox LabelName={line} allMediasData={allMediasData} 
                                setMediasHandler={setMediasHandler} medias={medias} 
                                hasBeenClicked={hasBeenClicked} setHasBeenClicked={setHasBeenClicked}/> 
                            ))}
                        </div>
                        
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
}

export default Toolbar;