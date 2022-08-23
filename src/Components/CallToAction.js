import '../Styles/CallToAction.css';
import {Link as LinkRouter} from 'react-router-dom'
import React from 'react'

export default function CallToAction(props) {
  let linkTo = props.linkTo
  let buttonAction = props.buttonAction
  
    return (
    <div>
        <LinkRouter to={linkTo} className='Action-Button'>{buttonAction.toLocaleUpperCase()} </LinkRouter>
    </div>
  )
}
