import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'
export const userAPI = createApi( {

    reducerPath: "userAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/" , 
    }),

    endpoints: (builder) => ({
        signUpUser: builder.mutation({
            query: (info) => ({
                url: '/auth/signup',
                method: 'POST',
                body: info,
        }), 

        singInToken: builder.mutation ({
            query: (token) => ({
                url: '/auth/token',
                method: 'POST',
                body: token,
                headers: {Authorization: 'Bearer' + localStorage.getItem('token')}
            })

            })
        }),

        signInUser: builder.mutation({
            query: (info) => ({
                url: '/auth/signin',
                method: 'POST',
                body: info,
            })
            
        }), 


        signOutUser: builder.mutation({
            query: (mail) => ({
                url: '/auth/signout',
                method: 'POST',
                body: mail,
            })
        }),
        
        
    })

}) 

export const {useSignInUserMutation, useSignUpUserMutation, useSignOutUserMutation, useSingInTokenMutation}=userAPI