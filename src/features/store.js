import {configureStore} from '@reduxjs/toolkit'
import cityReducer from './citySlice'
import {cityAPI} from './citiesAPI'


//instancia store
export const  store = configureStore ({

    reducer:{
        cities : cityReducer,
        [cityAPI.reducerPath] : cityAPI.reducer

    },
})
