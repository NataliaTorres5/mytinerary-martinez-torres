 import React, { useState, useEffect, useRef } from "react";
 import { useSelector, useDispatch } from 'react-redux'
import {useGetAllItinerariesQuery, useItineraryEditMutation} from '../features/itineraryAPI'
import axios from "axios";
import '../Styles/ItineraryEdit.css';

        
export default function ItineraryEdit() {

    const [ItineraryEdit, setItineraryEdit] = useState("")
    const [id, setId] = useState()
    const [itineraries, setItineraries] = useState([])
    console.log(itineraries)

    const itineraryNameRef = useRef()
    const cityNameRef = useRef()
    const priceRef = useRef()
    const tagsRef = useRef()
    const durationRef = useRef()
    const select = useRef()

    const array = [ 
        { item: "name", type: "text", value: itineraryNameRef, id:'idetail2' },
        { item: "city", type: "text", value: cityNameRef, id:'idetail3' },
        { item: "price", type: "number", value: priceRef, id:'idetail4' },
        { item: "tags", type: "text", value: tagsRef, id:'idetail7' },
        { item: "duration", type: "number", value: durationRef, id:'idetail5' },
    ]

    useEffect(() => {
        axios.get('http://localhost:4000/itineraries/')
            .then((response) => {
                setItineraryEdit(response.data)
            }).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/itineraries')
            .then(response => setItineraries(response.data.response))
            .catch(error => console.log(error))
    }, [])



    function updateItinerary() {
        axios.patch('http://localhost:4000/itineraries/' + `${id}`, {
            name: itineraryNameRef.current.value,
            city: cityNameRef.current.value,
            price: priceRef.current.value,
            tags: tagsRef.current.value,
            duration: durationRef.current.value,


        }) //here it goesthe objectof the variable
            .then((response) => {
                setItineraryEdit(response.data)
            })
    }
    const option = (itinerary) => (
        <option value={itinerary._id} key={itinerary._id}>{itinerary.itinerary}</option>
    )

    
    function update(){
        setId(select.current.value) 
    }

console.log(id)
    return (

        <>

            <div>
                
                <select ref={select} onChange={update} >  
                <option disabled selected>Select Itinerary</option>
                    {
                        itineraries.map(option)
                    }
                </select>
            </div>
            <form className='FORM-ITINERARY'>
                {
                    array.map((e) => {
                        return (
                            <div className='EditForm-Itinerary'>
                                <label htmlFor={e.item}> {e.item}</label>
                                <input type={e.type} ref={e.value} />
                            </div>
                        )
                    })
                }
                <div className='EditForm-Itinerary'>
                    <button> Submit</button>

                </div>

            </form>

        </>

    )
}