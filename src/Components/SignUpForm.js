
import React, {useRef} from 'react'
import { useSignUpUserMutation } from '../features/userAPI';


export default function SignUpForm() {

    const [newUser] = useSignUpUserMutation()

    const userNameRef = useRef()
    const userLastNameRef = useRef()
    const userPhotoRef = useRef()
    const userEmailRef = useRef()
    const userPasswordRef = useRef()

    const array = [
        {item: "name", type:"text", value: userNameRef, id:"userin1"},
        {item: "lastname", type:"text", value: userLastNameRef, id:"userin2"},
        {item: "photo", type:"url", value: userPhotoRef, id:"userin3"},
        {item: "email", type:"email", value: userEmailRef, id:"userin4"},
        {item: "password", type:"text", value: userPasswordRef, id:"userin5"},
        
    ]

    function submitInfo(text) {
        text.preventDefault();

      

        const userInfo = {
            name: userNameRef.current.value,
            lastname: userLastNameRef.current.value,
            photo: userPhotoRef.current.value,
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
            role: 'user',
            from: "form"
        }
      
        newUser(userInfo).unwrap().then(() => {}).then(err => console.log(err))
        
    } 


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



