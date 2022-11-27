import { createSlice } from '@reduxjs/toolkit'

export const editSlice = createSlice({
    name: "edit",
    initialState:{id:""},
    reducer: {
        idState: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const {idState} = editSlice.actions
export default editSlice.reducer