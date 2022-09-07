import React from 'react'
import { useParams } from 'react-router-dom';
//css

import { useGetAllItinerariesQuery } from '../features/itineraryAPI';


export default function Itineraries() {
    const {id} = useParams()
    const {
        data: itineraries,
        error,
        isLoading,
        isSuccess,
        isFailed,


    } = useGetAllItinerariesQuery(id)

    const itineraryPic = (item) => (
    
            <div className="cityCard">
                
                <h3>{item.name}</h3>
                <p>{item.city.city}</p>
                <p>Price: {item.price}</p>
                <p>{item.likes}</p>
                <p>{item.tags}</p>
                <p>Duration: {item.duration}</p>
            </div>
        
    )


    console.log(itineraries)
    return (
        <div className='iteration'>
            {itineraries?.response?.map(itineraryPic)}
        
        </div>
    )
}