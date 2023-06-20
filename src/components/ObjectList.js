import DraggableItems from './DraggableItem';
import objects from '../assets/data/objects.json';

export default function ObjectList() {

    return (
        <div style={{
            gridRow: '1',
            gridColumn: '1/3'
        }}>
            <h3>List of Objects</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                alignItems: 'center',
                width: '30rem',
                height: '7rem',
                border: '1px solid #333',
                overflowX: 'scroll',
            }}>
                {objects.map((object, index) => (
                    <DraggableItems object={object} key={index} grabBoolean={false} addToBoardBoolean={true} />
                ))}
            </div>
            <div style={{
                marginTop: '1rem',
                textAlign: 'center'
            }}>
                <span>
                    Click on an object to add it to the board.
                </span>
            </div>
        </div>
    );
};

