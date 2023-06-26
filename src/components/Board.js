import { useSelector, useDispatch } from "react-redux";
import { zoomIn, zoomOut } from "../redux/reducers/Zoom";
import { updateObject, updateFileObject } from "../redux/reducers/Objects";
import Draggable from "react-draggable";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import DraggableItem from "./DraggableItem";

export default function Board() {
  const addedObjectsToBoard = useSelector(state => state.reducers.objects.objects);
  const fileObjects = useSelector(state => state.reducers.objects.fileobjects);
  const scale = useSelector(state => state.reducers.zoom.zoom);
  const dispatch = useDispatch();

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      dispatch(zoomOut());
    } else if (delta < 0) {
      dispatch(zoomIn());
    }
  };

  const getCoords = (data, object) => {
    if (addedObjectsToBoard.includes(object)) {
      dispatch(updateObject({ id: object.id, x: data.lastX, y: data.lastY }));
    } else {
      dispatch(updateFileObject({ id: object.id, x: data.lastX, y: data.lastY }));
    }
  };


  return (
    <SimpleBar
      className="custom-scrollbar"
      style={{
        width: '55rem',
        height: '35rem',
        backgroundColor: '#FEEAC7',
        backgroundImage: `radial-gradient(circle, brown 10%, transparent 10%)`,
        backgroundSize: '20px 20px',
        gridColumn: '3/-1',
        gridRow: '1/-1',
        borderRadius: '7px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      }}
      onWheel={handleScroll}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left"
        }}
      >
        {addedObjectsToBoard.length > 0 &&
          addedObjectsToBoard.map((object, index) =>
            <Draggable
              key={index}
              scale={scale}
              onDrag={(_, data) => getCoords(data, object)}>
              <div>
                <DraggableItem object={object} key={index} grabBoolean={true} addToBoardBoolean={false} />
              </div>
            </Draggable>
          )
        }
        {fileObjects.length > 0 &&
          fileObjects.map((object, index) =>
            <Draggable
              key={index}
              scale={scale}
              defaultPosition={{
                x: object.x || 0,
                y: object.y || 0,
              }}
              onDrag={(_, data) => getCoords(data, object)}>
              <div>
                <DraggableItem object={object} key={index} grabBoolean={true} addToBoardBoolean={false} />
              </div>
            </Draggable>
          )
        }
      </div >
    </SimpleBar >
  );
};

