import React from 'react'
import axios from 'axios';
import '../Styles/CityCards.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';





export default function Cities() {
    
    const [cities, setCities] = useState([]) 
    
    useEffect(() => {
        axios.get('http://localhost:4000/cities/')
            .then(response =>{
                setCities(response.data.response)
                console.log(response.data) 
            } 
            )  
            
    }, [])                                                                                                       

    const cityPic = (item) => (
        <LinkRouter className='cityRouter' key={item._id} to={`/details/${item._id}`}>
            <div className="cityCard">
                <img className='imgCard' src={item.photo} alt='img' />
                <h3>{item.city}</h3>
                <p>{item.intro}</p>
    
            </div>
        </LinkRouter>
    )

    
    

    return (
        <div className='iteration'>
            {cities.map(cityPic)}
            {FilterInput}
        </div>
    )
}
