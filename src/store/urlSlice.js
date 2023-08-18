import { createSlice } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'
const urlSlice = createSlice({
    name: 'url',
    initialState: `${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`,
    reducers: {
        setUrl: (state, action) => {
            return action.payload
        }
    }
})

export const { seturl } = urlSlice.actions
export default urlSlice.reducer