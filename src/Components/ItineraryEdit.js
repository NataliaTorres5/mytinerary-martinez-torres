import React, { useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useGetAllItinerariesQuery, useItineraryEditMutation} from '../features/itineraryAPI'


export default function ItineraryEdit() {
    
    // const [editItinerary, setEditItinerary] = useState ("")
    // const [itinerary, setItinerary] = useState ({})
    const [id, setId] = useState()

    const [itineraryEdit] = useItineraryEditMutation()

    const itineraryNameRef = useRef()
    const cityNameRef = useRef()
    const priceRef = useRef()
    const tagsRef = useRef()
    const durationRef = useRef()


    const array = [ 
        { item: "name", type: "text", value: itineraryNameRef, id:'idetail2' },
        { item: "city", type: "text", value: cityNameRef, id:'idetail3' },
        { item: "price", type: "number", value: priceRef, id:'idetail4' },
        { item: "tags", type: "text", value: tagsRef, id:'idetail7' },
        { item: "duration", type: "number", value: durationRef, id:'idetail5' },
    ]


    function submitInfo(text) {
        text.preventDefault();

        const dataCity = {
            name: itineraryNameRef.current.value,
            city: cityNameRef.current.value,
            price: priceRef.current.value,
            tags: tagsRef.current.value,
            duration: durationRef.current.value,
        }
        itineraryEdit(dataCity).unwrap().then((response) => {}).then(err => console.log(err))

        const option = (itinerary) => (
            <option value={itinerary._id} key={itinerary._id}>{itinerary.itinerary}</option>
        )
    
        
        function update(){
            setId(select.current.value) 
        }
    


    return (
        <>
         <form className='FORM'>
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

            </form></>
    )
} }