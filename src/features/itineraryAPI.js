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
        getAllItinerariesUser: builder.query({
            query: (id) =>({
                url: `/itineraries?user=${id}`
            }) 
        }),
        createItinerary: builder.mutation({
            query: (body) =>({
                url: `/itineraries/`,
                method: 'POST',
                body: body
            })
        }),
        itineraryEdit: builder.mutation({
            query: (body) =>({
                url: `/itinerary/=${body.id}`,
                method: 'PATCH',
                body: body,
            })
        }),
        itineraryExterminate: builder.mutation({
            query: (id) =>({
               url: `/itineraries/${id}`,
               method: 'DELETE'
            })
        }),
        itineraryLikes: builder.mutation({
            query: (id) =>({
                url: `/itinerary/likes/${id}`,
                method: 'POST',
                headers: {Authorization: 'Bearer' + localStorage.getItem('token')},       
            })
        }),

        invalidatesTags: ['Post'],
        
    })
})

export default itineraryAPI
export const { useGetAllItinerariesQuery, useGetAllItinerariesUserQuery, useCreateItineraryMutation, useItineraryEditMutation, useItineraryExterminateMutation, useItineraryLikesMutation } = itineraryAPI