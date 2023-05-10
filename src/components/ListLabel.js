import './ListLabel.css';

function ListLabel({medias, gridIsShown}) {
    return (
        <div>
            {!gridIsShown && (
                <div className="label">
                    <div className="inner-label">
                        <p className="device-number">{Object.keys(medias).length} items</p>
                        <p className="media-type-label">TYPE</p>
                        <p className="name-label">NAME</p>
                    </div>
                    <hr className="list-label-hr"/>
                </div>
            )}

            {gridIsShown && (
                <div className="label">
                    <div className="grid-inner-label">
                        <p className="device-number">{Object.keys(medias).length} devices</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListLabel;