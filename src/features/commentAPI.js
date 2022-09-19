import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentAPI = createApi({
    reducerPath: "commentAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),

  

    endpoints: (builder) => ({
        getAllComments: builder.query({
            query: (id) =>({
                url: `/comments/?itineraries=${id}`
            }) 
            
        }),
        
    })
})

export default activityAPI
export const { useGetAllCommentsQuery, } = activityAPI