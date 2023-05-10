import React, {useState} from 'react';
import CheckboxDefault from '../media/checkbox-default.png';
import CheckboxActive from '../media/checkbox-active.png';
import './Checkbox.css';

function Checkbox ({LabelName, allMediasData, setMediasHandler, medias, hasBeenClicked, setHasBeenClicked}) {
    /* If checkbox is checked */
    const [checkIsClicked, setCheckIsClicked] = useState(false);

    function handleCheckboxClick (event) {

        /* Filtered medias from all medias */
        const filteredMedias = allMediasData.filter(
            media => (`${media.type}`.toLowerCase() === (LabelName.toLowerCase()))
        );

        /* Unchecking the box */
        if(checkIsClicked) {
            setCheckIsClicked(false);
            setHasBeenClicked(true);

            /* Remove items from filtered medias */
            const removedFilteredMedias = medias.filter( ( el ) => !filteredMedias.includes( el ) );
            setMediasHandler(removedFilteredMedias);            

        /* Checking the box */
        } else if (!checkIsClicked) {
            setCheckIsClicked(true);
            setHasBeenClicked(true);

            /* Edge case: If nothing has been clicked yet, medias needs to be empty */
            var allFilteredMedias = [];
            if(!hasBeenClicked){
                allFilteredMedias = filteredMedias.concat([]);
            } else {
                /* Combine current filtered medias list with the new filtered medias */
                allFilteredMedias = filteredMedias.concat(medias);
            }

            setMediasHandler(allFilteredMedias);
        }
    }
    
    return (
        <div className="checkbox-container" onClick={handleCheckboxClick}>
            {!checkIsClicked && (
                <img src={CheckboxDefault} alt="default checkbox"></img>
            )}
            {checkIsClicked && (
                <img src={CheckboxActive} alt="active checkbox"></img>
            )}
            <p>{LabelName}</p>
        </div>
    )
}

export default Checkbox;