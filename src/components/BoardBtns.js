import { useDispatch, useSelector, } from "react-redux";
import { delObjects, addFileObjects } from "../redux/reducers/Objects";
import { zoomIn, zoomOut } from "../redux/reducers/Zoom";

export default function BoardBtns() {
    const addedObjectsToBoard = useSelector(state => state.reducers.objects.objects);
    const fileObjects = useSelector(state => state.reducers.objects.fileobjects);
    const dispatch = useDispatch();

    const saveBoardToFile = () => {
        let dataToSave;

        const objCheck = addedObjectsToBoard.length > 0;
        const fileObjCheck = fileObjects.length > 0;

        if (!fileObjCheck && !objCheck) {
            alert('No data to save');
            return;
        }
        if (!objCheck && fileObjCheck) dataToSave = JSON.stringify(fileObjects);
        if (!fileObjCheck && objCheck) dataToSave = JSON.stringify(addedObjectsToBoard);
        if (fileObjCheck && objCheck)
            dataToSave = JSON.stringify([...addedObjectsToBoard, ...fileObjects]);

        const blob = new Blob([dataToSave], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'placement.json';
        link.click();
        URL.revokeObjectURL(url);
    };

    const importToBoard = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const fileContent = event.target.result;
                dispatch(addFileObjects(JSON.parse(fileContent)));
            };
            reader.readAsText(file);
        };

    };


    const delItemsOnBoard = () => {
        dispatch(delObjects());
    };

    const handleZoomIn = () => {
        dispatch(zoomIn());
    };

    const handleZoomOut = () => {
        dispatch(zoomOut());
    };

    return (
        <div style={{
            gridColumn: '1/3',
            gridRow: '2/4',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}
        >
            <button onClick={handleZoomIn}>Zoom in</button>
            <button onClick={handleZoomOut}>Zoom out</button>
            <button onClick={saveBoardToFile}>Save to File</button>
            <button onClick={delItemsOnBoard}>Clear Board</button>
            <div style={{
                textAlign: 'center'
            }}
            >
                <input type="file" onChange={(e) => importToBoard(e)} />
            </div>
        </div>
    );
};