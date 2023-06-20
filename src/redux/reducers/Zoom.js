import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    zoom: 1,
};

const zoomSlice = createSlice({
    name: 'zoom',
    initialState,
    reducers: {
        zoomIn: (state) => {
            state.zoom += 0.3;
        },
        zoomOut: (state) => {
            if (state.zoom > 0.7)
                state.zoom -= 0.3;
        },
    },
});

export const { zoomIn, zoomOut } = zoomSlice.actions;
export default zoomSlice.reducer;
