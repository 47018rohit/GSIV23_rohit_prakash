import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name: 'details',
    initialState: {},
    reducers: {
        setDetails: (state , action)=>{
           return action.payload
        },
    }
})

export const { setDetails } = detailSlice.actions;
export default detailSlice.reducer;