import './Header.css';
import Logo from './Logo.js'

function Header ({setGridIsShown, setCurrMedia, setMedias, allMedias}) {

    /* When logo is clicked, return to default list page */
    function handleLogoClick (event) {
        setGridIsShown(false);
        setCurrMedia(null);
        setMedias(allMedias);
    }

    return (
        <div className="header-container">
            <div className="logo-container" onClick={handleLogoClick}>
                <Logo />
            </div>
            <div className="right-container">
                <p className="media-library">Lulu's Media Library</p>
                <p className="shows-books-films">Shows / Books / Films</p>
            </div>
        </div>
    )
}

export default Header;