
import React from 'react'
import DetailCard from '../Components/DetailCard'
import ItineraryCard from '../Components/ItineraryCard'
import '../Styles/Details.css';

export default function Details() {
  return (
    <div className='Cardcity'>
      <DetailCard />
      <ItineraryCard />
    </div>
  )
}
