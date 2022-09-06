import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cityAPI = createApi({
    reducerPath: "cityAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: () => "cities"
        }),
        newCityAdd: builder.mutation({
            query: (data) => ({
                url: '/cities',
                method: 'POST',
                body: data
            })
        }),
        invalidatesTags: ['Post'],
    })



})



export const { useGetAllCitiesQuery, useNewCityAddMutation } = cityAPI