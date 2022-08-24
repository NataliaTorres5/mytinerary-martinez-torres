import React from 'react'
import '../../Styles/Arrow.css'

function Arrow(props) {

    if (!props.icon) {
        throw new Error('A function for the property icon needed')

    }

    if (!props.click) {
        throw new Error('A function for the property click needed')

    }


    return (
        <button className='Arrow' onClick={props.click}>
            {props.icon}

        </button>

    )

}
export default Arrow