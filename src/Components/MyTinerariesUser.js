import React from 'react'
import '../Styles/CityCards.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllItinerariesUserQuery } from '../features/itineraryAPI';






export default function Cities() {


    const {
        data: itineraries,
    } = useGetAllItinerariesUserQuery('6313e735e3fe0c896f2ff2d7') //value que ingresa usuario input

    const cityPic = (item) => (
        <LinkRouter className='cityRouter' key={item._id} to={`/details/${item._id}`}>
            <div className="cityCard ">
                <img className='imgCard' src={item.user.photo} alt='img' />
                <h3>{item.name}</h3>
                <p>{item.city.city}</p>
                <p>{item.price}</p>

    
            </div>
        </LinkRouter>

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
                {itineraries?.response?.map(cityPic)[4]}
            </div>
        </>
    )
}
