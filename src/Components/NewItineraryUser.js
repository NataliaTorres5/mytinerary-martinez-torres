import React from 'react'
import '../Styles/NewItinerary.css';
import { useCreateItineraryMutation } from '../features/itineraryAPI';
import { useRef, useState } from 'react';
import AlertSign from './AlertSign';

export default function NewItineraryUser() {

    const [createItinerary] = useCreateItineraryMutation()

    const [modalOpen, setModalOpen] = useState(false); //alert function
    const [messageError, setMessageError] = useState("") //alert function
    const [messageTittle, setMessageTittle] = useState("") //alert function
   

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



    function submitInfo(text) {
        text.preventDefault();

        const dataCity = {
          name: itineraryNameRef.current.value,
          city: cityNameRef.current.value,
          price: parseInt(priceRef.current.value),
          tags: tagsRef.current.value,
          duration: parseInt(durationRef.current.value),
      } 
      createItinerary(dataCity).unwrap().then((response) => {

            if (response.error) {
                let dataError = response.error
                let resMessage = dataError.data
                setModalOpen(true)
                setMessageError(resMessage.message)
                setMessageTittle('Error')
            } else {
                let dataResponse = response.data
                let dataSuccess = dataResponse.message
                setModalOpen(true)
                setMessageError(dataSuccess)
                setMessageTittle("Success")
            }

        }).then(err => console.log(err))

    }

    return (

        <div className='Itinerary'>
            <form className='FORM-NEW-ITINERARY' onSubmit={submitInfo}>
            {
                array.map((e) => {
                    return (
                        <div className='Form-New'>
                            <label htmlFor={e.item}> {e.item}</label>
                            <input type={e.type} ref={e.value} />
                        </div>
                    )
                })
            }
            <div className='Form-New'>
                <button> Submit</button>
            </div>
            <div>
                {modalOpen === true ?
                    <AlertSign
                        setOpenModal={setModalOpen}
                        setMessageError={messageError}
                        setMessageTittle={messageTittle} /> : null}
            </div>

        </form>
        </div>

    )
}
