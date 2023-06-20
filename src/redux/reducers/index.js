import { combineReducers } from 'redux';
import Objects from './Objects';
import Zoom from './Zoom';

export default combineReducers({
  objects: Objects,
  zoom: Zoom,
});

