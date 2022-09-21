import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

export const userLoggedSlice = createSlice({
    name:"logged",
    initialState: {
        loggedState:null,
        userState:null},
        

    reducers: {
        entry:(state, action) => {
            state.loggedState =  action.payload                           //!state.loggedState;
            
            
        },

        controlReducer : (state, action)=>{
            state.userState = action.payload

        },
    },
});

export const { entry, controlReducer } = userLoggedSlice.actions

export default  userLoggedSlice.reducer