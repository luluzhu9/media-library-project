import TableList from './TableList.js';
import Grid from './Grid.js';
import './ListGridContainer.css';

function ListGridContainer ({allMediasData, gridIsShown, setCurrMedia}) {
    return (
        <div>
            {!gridIsShown && (
                <div className="table-list-container">
                    {allMediasData.map((media) => (
                        <TableList mediaData={media} setCurrMedia={setCurrMedia}/>
                    ))}
                </div>
            )}

            {gridIsShown && (
                <div className="grid-container">
                    {allMediasData.map((media) => (
                        <Grid mediaData={media} setCurrMedia={setCurrMedia}/>
                    ))}
                </div>
            )}
        </div>
        
    );
}

export default ListGridContainer;