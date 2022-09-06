import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({

    name: 'cities',
    initialState: {
        cities : []
    },

    

    reducers : {
        fetchFromServer : (state) => { //acciones
            state.cities = [

                {

                }

            ]
        }
    },
})

export const {fetchFromServer} = citySlice.actions

export default citySlice.reducer