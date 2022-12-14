import React from 'react'
import { useParams } from 'react-router-dom';
import '../Styles/ItineraryCard.css';
import { useGetAllItinerariesQuery } from '../features/itineraryAPI';
import ActivityCards from './ActivityCards';


export default function Itineraries() {
    const { id } = useParams()
    const {
        data: itineraries,

    } = useGetAllItinerariesQuery(id)
    console.log (itineraries)

    const itineraryPic = (item) => (
        

        <div className='Details-Container'>
            <div className='User-Container'>
                <img className='user-Img' src='/icons/user1.png' alt="user" />
                 <h3>{item.user.name}</h3> 
                
            </div>
            <div className="cityCard ItineraryCards">
                <ActivityCards id={item._id} />
                <h4>{item.name}</h4>
                <p>{item.city.city}</p>
                <p>Price: {item.price}</p>
                <p>{item.likes}</p>
                <p>{item.tags}</p>
                <p>Duration: {item.duration}</p>

            </div>
        </div>



    )

    return (
        <div className='iteration'>
            {itineraries?.response?.map(itineraryPic)}


        </div>
    )
}
