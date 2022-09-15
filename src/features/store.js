import {configureStore} from '@reduxjs/toolkit'
import cityReducer from './citySlice'
import itineraryReducer from './itinerarySlice'
import {cityAPI} from './citiesAPI'
import {itineraryAPI} from './itineraryAPI'
import {activityAPI} from './activityAPI'
import { userAPI } from './userAPI'
import userLoggedSlice from './userLoggedSlice'



//instancia store
export const  store = configureStore ({

    reducer:{
        cities : cityReducer,
        [cityAPI.reducerPath] : cityAPI.reducer,

        itineraries: itineraryReducer,
        [itineraryAPI.reducerPath] : itineraryAPI.reducer,

        [activityAPI.reducerPath] : activityAPI.reducer,


        logged:userLoggedSlice,
        [userAPI.reducerPath] : userAPI.reducer,


    },
})
