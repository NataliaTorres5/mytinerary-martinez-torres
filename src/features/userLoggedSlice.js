import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

export const userLoggedSlice = createSlice({
    name:"logged",
    initialState: {
        loggedState:null,},

    reducers: {
        entry:(state) => {
            state.loggedState = !state.loggedState;
            
            
        },
    },
});

export const { entry } = userLoggedSlice.actions

export default  userLoggedSlice.reducer