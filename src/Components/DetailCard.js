import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'



export default function DetailCard() {

    const { id } = useParams()

    const  [detailCards, setDetailCards]  = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/cities/' + id)
            .then(response => {
                setDetailCards(response.data.response)
            }
            )

    }, [id])
console.log (detailCards)

    // let foundationCity = new Date(detailCards.foundation)
    // let foundationYear = foundationCity.getFullYear()

    return (
        <div>
             <h3> {detailCards.city} </h3> 
            <img src= {detailCards.photo} alt=""/>
            <p> {detailCards.details} </p>
            details
            
        </div>

       


    )
}
