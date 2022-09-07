import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itineraryAPI = createApi({
    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),

    tagTypes: ['Post'],

    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: (id) =>({
                url: `/itineraries?city=${id}`
            }) 
            
        }),
        invalidatesTags: ['Post'],
    })



})


export default itineraryAPI
export const { useGetAllItinerariesQuery, } = itineraryAPI