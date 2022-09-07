import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cityAPI = createApi({
    reducerPath: "cityAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (city) => `/cities?city=${city}`
        }),
        newCityAdd: builder.mutation({
            query: (data) => ({
                url: '/cities',
                method: 'POST',
                body: data
            })
        }),

        EditCity: builder.mutation({
            query: (data) => ({
                url: '/cities/id',
                method: 'PUT',
                body: data
            })
        }),


        invalidatesTags: ['Post'],
    })





})



export const { useGetAllCitiesQuery, useNewCityAddMutation, useEditCityMutation } = cityAPI