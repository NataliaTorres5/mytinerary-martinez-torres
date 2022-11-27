import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import '../Styles/EditCity.css';



export default function EditCity() {

    const [editCity, setEditCity] = useState("")
    const [id, setId] = useState()
    const [cities, setCities] = useState([])
    console.log(cities)

    const cityPhotoRef = useRef()
    const cityNameRef = useRef()
    const countryNameRef = useRef()
    const detailsRef = useRef()
    const introRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()
    const select = useRef()

    const array = [
        { item: "photo", type: "url", value: cityPhotoRef, id: 'form1' },
        { item: "city", type: "text", value: cityNameRef, id: 'form2' },
        { item: "country", type: "text", value: countryNameRef, id: 'form3' },
        { item: "details", type: "text", value: detailsRef, id: 'form4' },
        { item: "intro", type: "text", value: introRef, id: 'form7' },
        { item: "population", type: "number", value: populationRef, id: 'form5' },
        { item: "foundation", type: "number", value: foundationRef, id: 'form6' },

    ]

    useEffect(() => {
        axios.get('http://localhost:4000/cities/')
            .then((response) => {
                setEditCity(response.data)
            }).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/cities')
            .then(response => setCities(response.data.response))
            .catch(error => console.log(error))
    }, [])



    function updateCity() {
        axios.patch('http://localhost:4000/cities/' + `${id}`, {
            photo: cityPhotoRef.current.value,
            city: cityNameRef.current.value,
            country: countryNameRef.current.value,
            population: populationRef.current.value,
            details: detailsRef.current.value,
            intro: introRef.current.value,
            foundation: foundationRef.current.value,


        }) //here it goesthe objectof the variable
            .then((response) => {
                setEditCity(response.data)
            })
    }
    const option = (city) => (
        <option value={city._id} key={city._id}>{city.city}</option>
    )

    
    function update(){
        setId(select.current.value) 
    }

console.log(id)
    return (

        <>

            <div className="Select-city">
                
                <select ref={select} onChange={update} >  
                <option disabled selected>Select City</option>
                    {
                        cities.map(option)
                    }
                </select>
            </div>
            <form className='FORM-EDIT'>
                {
                    array.map((e) => {
                        return (
                            <div className='EditForm-city'>
                                <label htmlFor={e.item}> {e.item}</label>
                                <input type={e.type} ref={e.value} />
                            </div>
                        )
                    })
                }
                <div className='EditForm-city'>
                    <button> Submit</button>

                </div>

            </form>

        </>

    )
}