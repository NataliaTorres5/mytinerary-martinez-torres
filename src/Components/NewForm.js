import React from 'react'
import '../Styles/CityForm.css';
import { useNewCityAddMutation } from '../features/citiesAPI';
import { useRef } from 'react';
// import { useEffect, useState, } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

export default function Input() {

const [NewCity] = useNewCityAddMutation()




    const cityPhotoRef = useRef()
    const cityNameRef = useRef()
    const countryNameRef = useRef()
    const detailsRef = useRef()
    const introRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()

    const array = [
        { item: "photo", type: "url", value: cityPhotoRef, id: 'form1' },
        { item: "city", type: "text", value: cityNameRef, id: 'form2' },
        { item: "country", type: "text", value: countryNameRef, id: 'form3' },
        { item: "details", type: "text", value: detailsRef, id: 'form4' },
        { item: "intro", type: "text", value: introRef, id: 'form7' },
        { item: "population", type: "number", value: populationRef, id: 'form5' },
        { item: "foundation", type: "number", value: foundationRef, id: 'form6' },

    ]



    function submitInfo(text) {
        text.preventDefault();

        const dataCity = {
            photo: cityPhotoRef.current.value,
            city: cityNameRef.current.value,
            country: countryNameRef.current.value,
            details: detailsRef.current.value,
            intro: introRef.current.value,
            population: populationRef.current.value,
            foundation: foundationRef.current.value
        }
        NewCity(dataCity).unwrap().then(() =>{}).then(err =>console.log(err))

        /*cityInformation.push(dataCity)
        console.log(cityInformation)
        console.log(dataCity)*/
    }

    // const  [cityInput, setCityInput]  = useState([])

    // useEffect(() => {
    //     axios.post('http://localhost:4000/cities/', {
    //         photo: cityPhotoRef.current.value,
    //         city: cityNameRef.current.value, 
    //         country: countryNameRef.current.value,
    //         population: populationRef.current.value, 
    //         foundation: foundationRef.current.value,
    //     })


    // }, [])

    return (

        <form className='FORM' onSubmit={submitInfo}>
            {
                array.map((e) => {
                    return (
                        <div className='Form-city'>
                            <label htmlFor={e.item}> {e.item}</label>
                            <input type={e.type} ref={e.value} />
                        </div>
                    )
                })
            }
            <div className='Form-city'>
                <button> Submit</button>

            </div>

        </form>

    )
}
