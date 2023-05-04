import React from 'react'
import { useItineraryLikesMutation } from '../features/itineraryAPI'
import { useDispatch, useSelector } from 'react-redux'
import { recharge } from '../features/rechargeSlice'

export default function LikesDislikes(props) {

    const logged = useSelector((state) => state.logged.loggedState)
    const userState = useSelector((state) => state.logged.userState)

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
            
            <>
                <>
                    {role=== "user" && "admin" ?  <button  onClick={likeDislikes} > Like </button> &&
                    <p>{itinerary.likes.length}</p> : (  <p>{itinerary.likes.length}</p>)  }
                </>

                <>
                {itinerary.likes.user ?  <button  onClick={likeDislikes} > Like </button>  : (<p>{itinerary.likes.length}</p>)} 
                </>
            </>

            
            
           
            
            
           /* logged ? (
            <div>
                <button  onClick={likeDislikes} > Like </button>
                <p>{itinerary.likes.length}</p> 
            </div>

        ): (
            <div>
                <p>{itinerary.likes.length}</p> 
            </div>
        )*/

            
        )
    
}
