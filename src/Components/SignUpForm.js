
import React, { useRef, useState } from 'react'
import { useSignUpUserMutation } from '../features/userAPI';
import AlertSign from './AlertSign';


export default function SignUpForm() {

    const [newUser] = useSignUpUserMutation()
    const [modalOpen, setModalOpen] = useState(false); //alert function
    const [messageError, setMessageError] = useState("") //alert function
    const [messageTittle, setMessageTittle] = useState("") //alert function
    //const [iconSVG, setIconSVG] = useState("") //to include SVG alert

    const userNameRef = useRef()
    const userLastNameRef = useRef()
    const userPhotoRef = useRef()
    const userEmailRef = useRef()
    const userPasswordRef = useRef()

    const array = [
        { item: "name", type: "text", value: userNameRef, id: "userin1" },
        { item: "lastName", type: "text", value: userLastNameRef, id: "userin2" },
        { item: "photo", type: "url", value: userPhotoRef, id: "userin3" },
        { item: "email", type: "email", value: userEmailRef, id: "userin4" },
        { item: "password", type: "text", value: userPasswordRef, id: "userin5" },

    ]

    function submitInfo(text) {
        text.preventDefault();


        const userInfo = {
            name: userNameRef.current.value,
            lastName: userLastNameRef.current.value,
            photo: userPhotoRef.current.value,
            email: userEmailRef.current.value,
            password: userPasswordRef.current.value,
            role: 'user',
            from: "form"
        }

        console.log(userInfo)

        newUser(userInfo).unwrap().then((response) => {
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

                localStorage.setItem(
                    "testUser",
                    JSON.stringify(response.data.response.user)
                )
            }

        }).then(err => console.log(err))

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

<div className='div-modal-signinGoogle'>
        
    
        {modalOpen === true ?
            <AlertSign
                setOpenModal={setModalOpen}
                setMessageError={messageError}
                setMessageTittle={messageTittle}/> :null}
        </div>
            <div className='Form-city'>
                <button> Submit</button>

            </div>

        </form>

    )
}



