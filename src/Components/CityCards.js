import React from 'react'
import '../Styles/CityCards.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useGetAllCitiesQuery } from '../features/citiesAPI';




export default function Cities() {
    const {
        data: cities,
        error,
        isLoading,
        isSuccess,
        isFailed,


    } = useGetAllCitiesQuery("") //value que ingresa usuario input

    const cityPic = (item) => (
        <LinkRouter className='cityRouter' key={item._id} to={`/details/${item._id}`}>
            <div className="cityCard">
                <img className='imgCard' src={item.photo} alt='img' />
                <h3>{item.city}</h3>
                <p>{item.intro}</p>

            </div>
        </LinkRouter>
    )

    console.log(cities)


    return (
        <div className='iteration'>
            {cities?.response.map(cityPic)}
            {/* {FilterInput} */}
        </div>
    )
}
