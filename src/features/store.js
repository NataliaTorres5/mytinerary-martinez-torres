import {configureStore} from '@reduxjs/toolkit'
import cityReducer from './citySlice'
import itineraryReducer from './itinerarySlice'
import {cityAPI} from './citiesAPI'
import {itineraryAPI} from './itineraryAPI'


//instancia store
export const  store = configureStore ({

    reducer:{
        cities : cityReducer,
        [cityAPI.reducerPath] : cityAPI.reducer,

        itineraries: itineraryReducer,
        [itineraryAPI.reducerPath] : itineraryAPI.reducer,

    },
})
