import { useSelector, useDispatch } from "react-redux";
import { zoomIn, zoomOut } from "../redux/reducers/Zoom";
import { updateObject, updateFileObject } from "../redux/reducers/Objects";
import DraggableCore from "react-draggable";
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
    dispatch(updateObject({ id: object.id, x: data.lastX, y: data.lastY }));
    dispatch(updateFileObject({ id: object.id, x: data.lastX, y: data.lastY }));
  };


  return (
    <div
      style={{
        width: '55rem',
        height: '35rem',
        backgroundImage: `linear-gradient(to right, transparent 1px, #000 1px),
         linear-gradient(to bottom, transparent 1px, #000 1px)`,
        backgroundSize: '20px 20px',
        overflow: 'scroll',
        gridColumn: '3/-1',
        gridRow: '1/-1',
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
            <DraggableCore key={index}
              onDrag={(_, data) => getCoords(data, object)}>
              <div>
                <DraggableItem object={object} key={index} grabBoolean={true} addToBoardBoolean={false} />
              </div>
            </DraggableCore>

          )
        }
        {fileObjects.length > 0 &&
          fileObjects.map((object, index) =>
            <DraggableCore key={index}
              defaultPosition={{
                x: object.x || 0,
                y: object.y || 0,
              }}
              onDrag={(_, data) => getCoords(data, object)}>
              <div>
                <DraggableItem object={object} key={index} grabBoolean={true} addToBoardBoolean={false} />
              </div>
            </DraggableCore>

          )
        }
      </div >
    </div>
  );
};

