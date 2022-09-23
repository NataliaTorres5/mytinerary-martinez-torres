import React from 'react'
import '../Styles/CityCards.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllItinerariesUserQuery } from '../features/itineraryAPI';
import { userAPI } from '../features/userAPI';






export default function Cities() {

    const link = (page) => <LinkRouter className='hRouter' key={page.id} to={page.to}>{page.name} <img className='hImg' width={45} src={page.url} alt={page.id} /></LinkRouter>

    const {
        data: itineraries,
    } = useGetAllItinerariesUserQuery('63223132ad593d16eec7b4a2') //value que ingresa usuario input
    const cityPic = (item) => (
        
            <div className="cityCard ">
                <img className='imgCard' src={item.user.photo} alt='img' />
                <img className='imgCard' src={item.city.photo} alt='img' />
                <h3>{item.name}</h3>
                <p>{item.city.city}</p>
                <p>Price: ${item.price}</p>

            </div>
    
       

    )

    console.log(itineraries)


    return (
        <>
            <div className='iteration2'>
                <h1>My Tineraries</h1>
                <h2>Laura Martinez</h2>
            </div>
            <h4>Saved Itineraries</h4>
            <div className='iteration'>
                {itineraries?.response?.map(cityPic)}
            </div>
            <LinkRouter className='Header-option' to='/patchitinerary'>Edit Itinerary Press here</LinkRouter>
        </>
    )
}
