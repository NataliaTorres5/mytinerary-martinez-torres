import React from 'react'
import '../Styles/ActivityCards.css';
import { useGetAllActivitiesQuery } from '../features/activityAPI';


export default function ActivityCards(props){
    const {
        data: activities,

    } = useGetAllActivitiesQuery(props.id)

    console.log(activities)

    const activityPic = (item) => (

            <div className="cityCard activity">
                <h3>{item.name}</h3>
                <img className='imgCard' src={item.photo} alt='img' />
                {/* <p>{item.itinerary?.user}</p>  */}
            </div>

        

    ) 

        return (
            <>
            <div>
            {activities?.response?.map(activityPic)}
            </div>
            </>
        )
}
