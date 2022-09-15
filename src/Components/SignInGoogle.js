import React, { useEffect, useRef, useState } from 'react'
import { useSignInUserMutation } from '../features/userAPI';
import { entry } from '../features/userLoggedSlice';
import { useDispatch } from 'react-redux';

import AlertSign from '../Components/AlertSign'
import * as jose from 'jose'

export default function SignInGoogle() {

  const dispatch = useDispatch()
  
    const buttonDiv = useRef(null)
    let [user, change] = useSignInUserMutation();
    const [modalOpen, setModalOpen] = useState(false); //alert function
    const [messageError, setMessageError] = useState("") //alert function
    const [messageTittle, setMessageTittle] = useState("") //alert function
    //const [iconSVG, setIconSVG] = useState("") //to include SVG alert


    async function handleCredentialResponse(response) { //alojaremos la respuesta

        let responsePayload = jose.decodeJwt(response.credential)
        console.log(responsePayload)   // se utiliza jose, decodificador de respuesta

        let info = {
            email: responsePayload.email,
            password: responsePayload.sub, 
            from: 'google',
        }
         user (info)
         .then(response => {

          console.log(response)

          dispatch(entry(response.data.response.user))
      

          if (response.error){
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
          .catch((error) => {
            console.log(error)
          })
        }



         //divpatch que va a user slice
         //use selector se extrae el estado de
        
       
    

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '794215205311-p24lfeluq0d3hpk16v4gngg6ab0sgcbv.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            context: 'signin'
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signin_with' }  // customization attributes
          );
    }, [])

  return (
    <>
    <div className='div-modal-signinGoogle'>
        
    
        {modalOpen === true ?
            <AlertSign
                setOpenModal={setModalOpen}
                setMessageError={messageError}
                setMessageTittle={messageTittle}/> :null}
        </div>
    <div>
        <div ref={buttonDiv} className='signin'></div>
    </div>



</>
  )
}
