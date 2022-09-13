import React, {useRef} from 'react'
import { useSignUpUserMutation } from '../features/userAPI';

import React from 'react'

export default function SignUpForm() {

    const [newUser] = useSignUpUserMutation()

    const userNameRef = useRef()
    const userLastNameRef = useRef()
    const userPhotoRef = useRef()
    const userEmailRef = useRef()
    const userPasswordRef = useRef()

    const array = [
        {item: "name", type:"text", value: "userNameRef", id:"userin1"},
        {item: "lastname", type:"text", value: "userLastNameRef", id:"userin2"},
        {item: "userPhotoRef", type:"url", value: "", id:"userin3"},
        {item: "email", type:"userEmailRef ", value: "", id:"userin4"},
        {item: "password", type:"text", value: "userPasswordRef", id:"userin5"},
        
    ]
  return (
    <div>SignUpForm</div>
  )
}

