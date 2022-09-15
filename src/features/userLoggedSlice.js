import { createSlice } from "@reduxjs/toolkit";
import React from 'react'

export const userLoggedSlice = createSlice({
    name:"logged",
    initialState: {
        loggedState:null,},

    reducers: {
        entry:(state, action) => {
            state.loggedState = action.payload;
            localStorage.setItem('testUser', JSON.stringify(state.loggedState))
            
        },
    },
});

export const { entry } = userLoggedSlice.actions

export default  userLoggedSlice.reducer