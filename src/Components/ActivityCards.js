import React from 'react'
//css
import { useGetAllActivitiesQuery } from '../features/activityAPI';


export default function ActivityCards(props){
    const {
        data: activities,
  
    } = useGetAllActivitiesQuery(props.id)

    console.log(activities)

    const activityPic = (item) => (
    
            <div className="cityCard">
                <h3>{item.name}</h3>
                <img className='imgCard' src={item.photo} alt='img' />
                <p>{item.itinerary?.user}</p> 
            </div>
        
    )



    return (
        <div className='iteration'>
            {activities?.response?.map(activityPic)}
        </div>
    )
}

