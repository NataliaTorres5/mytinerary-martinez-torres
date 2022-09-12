import React from 'react'
import '../Styles/Details.css';
import { useEffect, useState, } from 'react'
import CallToAction from './CallToAction';
import { useParams } from 'react-router-dom'
import apiurl from '../api';
import axios from 'axios'




export default function DetailCard() {

    const { id } = useParams()

    const  [detailCards, setDetailCards]  = useState([])

    useEffect(() => {
        axios.get(apiurl + '/cities/' + id)
            .then(response => {
                setDetailCards(response.data.response)
            }
            )

    }, [id])


    let foundationCity = new Date(detailCards.foundation)
    let foundationYear = foundationCity.getFullYear()

    return (
        <div className='Details-Container'>
             <h3> {detailCards.city} </h3> 
             <h2>{detailCards.country}</h2>
            <img src= {detailCards.photo} alt=""/>
            <p> {detailCards.details} </p>
            <p>Population: {detailCards.population}</p>
            <p>Foundation: {foundationYear}</p>
            <CallToAction className='returnbtn' linkTo='/cities' buttonAction='Return' />
            
        </div>
       
            

      


    )
}
