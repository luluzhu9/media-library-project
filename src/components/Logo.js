import DefaultLogo from '../media/cube-default.gif';
import './Logo.css'

function Logo () {
    return(
        <div className="logo-container">
            <img className="logo" src={DefaultLogo} alt="default logo"/>
        </div>
    );
}

export default Logo;
