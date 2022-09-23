import React from 'react'
import {useItineraryExterminateMutation} from '../features/itineraryAPI'
import { useDispatch } from 'react-redux'

export default function ItineraryDelete(props) {

  const [ exterminateItinerary ] = useItineraryExterminateMutation() //estamos llamando el reducer desde la api para que use el controlador de delete

  const dispatch = useDispatch()

  async function deleteItinerary() {
    try { 
      let response = await exterminateItinerary(props.itinerary) //creamos una funcion que espera el props de itineary (padre de este)
      if(response.data?.success){
        console.log(response);
      }else {
        console.log(response.error)
      }
    }catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
       <button className='deleteItinerary' onClick={deleteItinerary}><img src='../../icons/Booking.png' /></button>
    </div>
  )
}
