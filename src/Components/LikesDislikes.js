import React from 'react'
import { useItineraryLikesMutation } from '../features/itineraryAPI'
import { useDispatch, useSelector } from 'react-redux'
import { recharge } from '../features/rechargeSlice'

export default function LikesDislikes(props) {

    const [itineraryLikes] = useItineraryLikesMutation() //brings the likes from the API and stores it
    const itinerary = props.itinerary // brings the itinerary by props
   // console.log (itinerary)
    const user = useSelector((state) => state.logged.userState) // verifica el estado del usuario si esta loggeado o non
    //console.log(user)
    const dispatch = useDispatch() //es lo que permiteel uso de slicer

    async function likeDislikes() {

        if (localStorage.getItem('token')) { //si el local storage tiene un token

            try {
                let res = await itineraryLikes(itinerary._id) //  va a esperarlaactivacion del api por medio del id del itinerario
               // console.log(res)
               // console.log(itinerary)
                // if (res.data?.success) { //si es exitoso 
                //     dispatch(recharge()) // recarga la pagina

                //     console.log (res.data.success)
                // } else {
                //     console.log(res.error)
                // }
            } catch (error) {
                console.log(error)
            }
        }
    }

    
        return (
            <div>

                { /*<button className={((user && itinerary.likes.includes(user.id)) || !user) ? 'Itinerary-like-btn' : 'Itinerary-dislike-btn'} onClick={likeDislikes}> <img src="../icons/swhitef.png" alt=""/> </button> */}

                <button  onClick={likeDislikes}> Like </button>

                <p>{itinerary.likes.length}</p> 
            </div>
        )
    
}
