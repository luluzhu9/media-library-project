import BackIcon from '../media/back-icon.png';
import './SingleItemToolbar.css';

function SingleItemToolbar ({currMedia, setCurrMedia, setMediasHandler, medias}) {
    /* Close single item tookbar */
    function handleBackIcon (event) {
        setCurrMedia(null);
        setMediasHandler(medias);
    }

    return (
        <div className="single-item-toolbar-container">
            <img src={BackIcon} alt="back-icon" onClick={handleBackIcon}></img>
            <p>{currMedia.name}</p>
        </div>
    )
}

export default SingleItemToolbar;