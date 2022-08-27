import React from 'react'
import { useRef } from 'react';

export default function Input() {

    const cityPhotoRef = useRef()
    const cityNameRef = useRef()
    const countryNameRef = useRef()
    const detailsRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()

    const array = [
        { item: "photo", type: "url", value: cityPhotoRef, id: 'form1' },
        { item: "city", type: "text", value: cityNameRef, id: 'form2' },
        { item: "country", type: "text", value: countryNameRef, id: 'form3' },
        { item: "details", type: "text", value: detailsRef, id: 'form4' },
        { item: "population", type: "number", value: populationRef, id: 'form5' },
        { item: "foundation", type: "number", value: foundationRef, id: 'form6' },

    ]

    const cityInformation = []

    function submitInfo(text) {
        text.preventDefault();

        const dataCity = {
            data1: cityPhotoRef.current.value,
            data2: cityNameRef.current.value,
            data3: countryNameRef.current.value,
            data4: detailsRef.current.value,
            data5: populationRef.current.value,
            data6: foundationRef.current.value
        }

        cityInformation.map(dataCity)
        console.log(cityInformation)
        console.log(dataCity)
    }

    return (

        <form onSubmit={submitInfo}>
            {
                array.map((e) => {
                    return (
                        <div>
                            <label htmlFor={e.item}> {e.item}</label>
                            <input type={e.type} ref={e.value} />
                        </div>
                    )
                })
            }
            <div>
                <button> Submit</button>

            </div>

        </form>

    )
}
