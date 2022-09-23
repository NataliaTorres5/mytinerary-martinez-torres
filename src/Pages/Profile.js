import React, {useRef, useState}  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEditProfileMutation } from '../features/userAPI'
import { controlReducer } from '../features/userLoggedSlice' //para recargar pagina




export default function Profile() {

    const [editProfile] = useEditProfileMutation()

    const nameUserRef = useRef()
    const lastNameRef = useRef()
    const userPhotoRef = useRef() 


    const user = useSelector((state) => state.logged.user)
    

    const navigate = useNavigate()
    const dispatch = useDispatch() //establecer recarga de pagina

    const array = [
        { item: "name", type: "text", value: nameUserRef, id: 'user2' },
        { item: "photo", type: "url", value: userPhotoRef, id: 'user1' },
        { item: "Last Name", type: "text", value: lastNameRef, id: 'user3' },
    ]

    function submitInfo(text) {
        text.preventDefault();

        const dataUser = {
            name: nameUserRef.current.value,
            lastName: lastNameRef.current.value,
            photo: userPhotoRef.current.value,
        }
        editProfile(dataUser).unwrap().then((response) => {}).then(err => console.log(err))
    }






  return (
    <div>
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
    </div>
  )
}
