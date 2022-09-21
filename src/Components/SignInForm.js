
import React, { useRef, useState } from 'react'
import { useSignInUserMutation } from '../features/userAPI';
import { entry, controlReducer } from '../features/userLoggedSlice';
import { useDispatch } from 'react-redux';
import AlertSign from './AlertSign';


export default function SignInForm() {

  const dispatch = useDispatch() //cambia estado con entry que es la accion

  const [user] = useSignInUserMutation()
  const [modalOpen, setModalOpen] = useState(false); //alert function
  const [messageError, setMessageError] = useState("") //alert function
  const [messageTittle, setMessageTittle] = useState("") //alert function
  //const [iconSVG, setIconSVG] = useState("") //to include SVG alert


  const userEmailRef = useRef()
  const userPasswordRef = useRef()

  const array = [

    { item: "email", type: "email", value: userEmailRef, id: "userin4" },
    { item: "password", type: "text", value: userPasswordRef, id: "userin5" },

  ]

  function submitInfo(text) {
    text.preventDefault();



    const userInfo = {

      email: userEmailRef.current.value,
      password: userPasswordRef.current.value,
      role: 'user',
      from: "form"
    }

    user(userInfo)
      .then(response => {
        console.log(response)
        //entry(response.data.response.user.role)
        dispatch(entry(true))
        dispatch(controlReducer(response.data.response.user.role))
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


      })
      .catch(error => console.log(error))




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
            setMessageTittle={messageTittle} /> : null}
      </div>
      <div className='Form-city'>
        <button> Submit</button>

      </div>

//         </form>

    //     )
    // }

  )
}
