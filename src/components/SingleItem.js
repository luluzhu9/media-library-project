import './SingleItem.css';
import SingleItemDescription from './SingleItemDescription.js';

function SingleItem ({currMedia}) {
    const categories = ["Name", "Type", "Creator", "Rating"]

    return(
        <div className="single-item-container">
            <img className="single-item-image" src={currMedia.image} alt="media"></img>
            <div className="media-info-container">
                {categories.map((category) => <SingleItemDescription currMedia={currMedia} category={category}/>)}        
            </div>
        </div>
    )
}

export default SingleItem;