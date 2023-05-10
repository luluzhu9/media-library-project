import React, {useState, useEffect} from 'react';
import Header from './components/Header.js';
import ListLabel from './components/ListLabel.js';
import Toolbar from './components/Toolbar.js';
import ListGridContainer from './components/ListGridContainer.js';
import SingleItemToolbar from './components/SingleItemToolbar.js'
import SingleItem from './components/SingleItem.js'

function App(){
    /* Current filtered medias */
    const [medias, setMedias] = useState([]);
    /* All media */
    const [allMedias, setAllMedias] = useState([]);
    /* If Grid mode is clicked or not */
    const [gridIsShown, setGridIsShown] = useState(false);
    /* The current media for single item mode, null if none */
    const [currMedia, setCurrMedia] = useState(null);


    /* Handler for using setMedias in inner components */
    const setMediasHandler = (medias) => {
        setMedias(medias);
    }

    /* Fetch JSON and save to allMedias and medias*/
    useEffect(() => {
        (async () => {
            let mediaData;
            try {
                const response = await fetch('https://my-media-api-project.herokuapp.com/media');
                mediaData = (await response.json());
            } catch (error) {
                console.log(error);
                mediaData = [];
            }
            setAllMedias(mediaData);
            setMedias(mediaData);
        })();
    }, []);

    return (
        <div className="App">
            <Header setGridIsShown={setGridIsShown} setCurrMedia={setCurrMedia} setMedias={setMedias} allMedias={allMedias}/>
            {currMedia == null && (
                <Toolbar allMediasData={allMedias} setMediasHandler={setMediasHandler} setGridIsShown={setGridIsShown} gridIsShown={gridIsShown} medias={medias}/>
            )}

            {currMedia == null && (
                <ListLabel medias={medias} gridIsShown={gridIsShown}/>
            )}

            {currMedia == null && (
                <ListGridContainer allMediasData={medias} gridIsShown={gridIsShown} setCurrMedia={setCurrMedia}/>
            )}

            {currMedia != null && (
                <SingleItemToolbar currMedia={currMedia} setCurrMedia={setCurrMedia} setMediasHandler={setMediasHandler} medias={medias}/>
            )}

            {currMedia != null && (
                <SingleItem currMedia={currMedia}/>
            )}
            
        </div>
    );
}

export default App;
