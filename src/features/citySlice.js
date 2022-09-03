import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({

    name: 'cities',

    initialState: {

        events : []
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

export const {fetchFromServer} = citySlice

export default citySlice.reducer