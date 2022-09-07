import { createSlice } from '@reduxjs/toolkit'

export const itinerarySlice = createSlice({

    name: 'itineraries',
    initialState: {
        itineraries : []
    },

    

    reducers : {
        fetchFromServer : (state) => { //acciones
            state.itineraries = [

                {

                }

            ]
        }
    },
})

export const {fetchFromServer} = itinerarySlice.actions

export default itinerarySlice.reducer