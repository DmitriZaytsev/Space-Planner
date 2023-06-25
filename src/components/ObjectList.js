import DraggableItems from './DraggableItem';
import objects from '../assets/data/objects.json';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function ObjectList() {
    return (
        <div className="col-span-2 ml-4">
            <h3 className='text-yellow-900 mb-4'>List of Objects</h3>
            <div>
                <SimpleBar
                    className="custom-scrollbar"
                    style={{
                        width: '30rem',
                        border: '1px solid #986000',
                        borderRadius: '5px'
                    }}
                >
                    <div
                        className='flex flex-row p-4'
                    >
                        {objects.map((object, index) => (
                            <DraggableItems
                                object={object}
                                key={index}
                                grabBoolean={false}
                                addToBoardBoolean={true}
                            />
                        ))}
                    </div>
                </SimpleBar>
            </div>
            <div className="mt-4 text-center">
                <span className="text-orange-400">Click on an object to add it to the board.</span>
            </div>
        </div>
    );
}


