import { useState, useRef } from 'react';
import { useDispatch, useSelector, } from "react-redux";
import { zoomIn, zoomOut } from "../redux/reducers/Zoom";
import { delObjects, addFileObjects } from "../redux/reducers/Objects";

export default function BoardBtns() {
    const addedObjectsToBoard = useSelector(state => state.reducers.objects.objects);
    const fileObjects = useSelector(state => state.reducers.objects.fileobjects);
    const dispatch = useDispatch();

    const [fileName, setFileName] = useState('File isn\'t selected');
    const fileInputRef = useRef(null);

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

        if (file.type === 'application/json') {
            const reader = new FileReader();

            reader.onload = (event) => {
                const fileContent = event.target.result;

                // check all objects have "id" and "imageUrl"
                for (const obj of fileContent) {

                    if (!obj.hasOwnProperty('id') || !obj.hasOwnProperty('imageUrl')) {

                        alert('Not correct file. Use file created on this site');
                        return;
                    }
                }

                dispatch(addFileObjects(JSON.parse(fileContent)));
                console.log(fileContent);
            };
            reader.readAsText(file);

            //Set file name
            setFileName(file.name);

            // Reset value to user can import one fail more than once
            fileInputRef.current.value = null;

        } else {
            alert('Not correct file. Use file created on this site');
        }

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
        <div className="col-span-2 row-start-2 row-end-4 self-center flex flex-col gap-4
         bg-light-sandy w-90 h-60 p-8">
            <button className="text-orange-400 hover:scale-110 duration-500 outline-transparent" onClick={handleZoomIn}>
                Zoom in
            </button>
            <button className="text-orange-400 hover:scale-110 duration-500 outline-transparent" onClick={handleZoomOut}>
                Zoom out
            </button>
            <button className="text-orange-400 hover:scale-110 duration-500 outline-transparent" onClick={saveBoardToFile}>
                Save to File
            </button>
            <button className="text-orange-400 hover:scale-110 duration-500 outline-transparent" onClick={delItemsOnBoard}>
                Clear Board
            </button>
            <div>
                <label htmlFor="inputfile"
                    className="text-white bg-sandy inline-block text-lg px-2 
                    py-1 cursor-pointer outline outline-3 hover:outline-sandy outline-transparent duration-500">
                    Choose File
                </label>
                <input type="file" id="inputfile" onChange={(e) => importToBoard(e)}
                    className="w-0.1 h-0.1 opacity-0 overflow-hidden absolute -z-1 hidden"
                    ref={fileInputRef}
                />
                <span className='text-sandy ml-4'>{fileName}</span>
            </div>
        </div>
    );
};