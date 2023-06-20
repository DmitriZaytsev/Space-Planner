import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objects: [],
  fileobjects: [],
};

const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    addObject: (state, action) => {
      state.objects.push(action.payload);
    },
    addFileObjects: (state, action) => {
      const array = action.payload;
      state.fileobjects.push(...array);
    },
    updateFileObject: (state, action) => {
      const { id, x, y } = action.payload;
      const object = state.fileobjects.find(obj => obj.id === id);
      if (object) {
        object.x = x;
        object.y = y;
      }
    },
    updateObject: (state, action) => {
      const { id, x, y } = action.payload;
      const object = state.objects.find(obj => obj.id === id);
      if (object) {
        object.x = x;
        object.y = y;
      }
    },
    delObjects: state => {
      state.objects = [];
      state.fileobjects = [];
    },
  },
});

export const { addObject, updateObject, delObjects, addFileObjects, updateFileObject } = objectsSlice.actions;
export default objectsSlice.reducer;
