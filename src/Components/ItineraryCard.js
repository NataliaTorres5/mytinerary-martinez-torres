import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom';
import '../Styles/ItineraryCard.css';
import { useGetAllItinerariesQuery } from '../features/itineraryAPI';
import ActivityCards from './ActivityCards';
import LikesDislikes from './LikesDislikes';
import SavedComment from './Comments/SavedComment';
import CreateComment from './Comments/CreateComment.js'


export default function Itineraries(props) {

    const user = useSelector((state) => state.logged.userState) 



    const { id } = useParams()
    const {
        data: itineraries,

    } = useGetAllItinerariesQuery(id)




    const itineraryPic = (item) => (

        <div className='Details-Container'>
            <div className='User-Container'>
                <img className='user-Img' src='/icons/user1.png' alt="user" />
                <h3>{/*item.user*/}</h3>

            </div>
            <div className="cityCard ItineraryCards">
                <ActivityCards id={item._id} />
                <h4>{item.name}</h4>
                <p>{item.city.city}</p>
                <p>Price: {item.price}</p>
                <p>{item.likes}</p>
                <p>{item.tags}</p>
                <p>Duration: {item.duration}</p>

                <LikesDislikes itinerary={item} />

                <SavedComment itinerary={item} />

                

                {
                    user && <CreateComment id={item._id} />
                }




            </div>
        </div>



    )

    return (
        <div className='iteration'>
            {itineraries?.response.map(itineraryPic)}
        </div>
    )
}
