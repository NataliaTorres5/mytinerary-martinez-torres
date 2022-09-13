import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'
export const userAPI = createApi( {

    reducerPath: "userAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (info) => ({
                url: '/auth/signup',
                method: 'POST',
                body: info
            })
        }), 

        signInUser: builder.mutation({
            query: (info) => ({
                url: '/auth/signin',
                method: 'POST',
                body: info
            })
        }), 
        
    })

}) 

export const {useSignInUserMutation, useSignUpUserMutation}=userAPI