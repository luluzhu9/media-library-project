import "./SingleItemDescription.css";

function SingleItemDescription ({currMedia, category}) {
    return (
        <div className="single-item-description-container">
            <p className="category-name">
                {category}
            </p>
            <p className="category-info">
                {console.log(currMedia)}
                {category === "Name" && (currMedia.hasOwnProperty("name")) && (
                    currMedia.name
                )}
                {category === "Type" && (currMedia.hasOwnProperty("type")) && (
                    currMedia.type
                )}
                {category === "Creator" && (currMedia.hasOwnProperty("creator")) && (
                    currMedia.creator
                )}
                {category === "Rating" && (currMedia.hasOwnProperty("rating")) && (
                    currMedia.rating + "/10"
                )}
            </p>
        </div>
    )
}

export default SingleItemDescription;