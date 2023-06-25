import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addObject } from '../redux/reducers/Objects';

export default function DraggableItem({ object, grabBoolean, addToBoardBoolean }) {
    const dispatch = useDispatch();

    const addToBoard = () => {
        if (!addToBoardBoolean) return;
        const uniqObject = {
            id: uuidv4(),
            ...object
        };
        dispatch(addObject(uniqObject));
    };

    return (
        <div
            className='shrink-0'
            onClick={addToBoard}
        >
            <img src={process.env.PUBLIC_URL + object.imageUrl} alt={object.name}
                style={{ marginRight: '2rem', width: '4rem', height: '4rem', cursor: grabBoolean ? 'grab' : 'pointer' }}
            />
        </div>
    );
};


