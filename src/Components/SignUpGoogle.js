import React, { useEffect, useRef, useState } from 'react'
import AlertSign from './AlertSign';
import { useSignUpUserMutation } from '../features/userAPI';
import * as jose from 'jose'

export default function SignUpGoogle() {

    let [newUser,response] = useSignUpUserMutation();
    const [modalOpen, setModalOpen] = useState(false); //alert function
    const [messageError, setMessageError] = useState("") //alert function
    const [messageTittle, setMessageTittle] = useState("") //alert function

    const buttonDiv = useRef(null)

    async function handleCredentialResponse(response) { //alojaremos la respuesta

        let responsePayload = jose.decodeJwt(response.credential)
        console.log(responsePayload) // se utiliza jose, decodificador de respuesta

        
         
        let info = {
            name: responsePayload.given_name,
            lastName: responsePayload.family_name,
            photo: responsePayload.picture,
            email: responsePayload.email,
            password: responsePayload.sub,
            role: 'user', 
            from: 'google',
        }
        newUser (info).then((response => {
          if(response.error){
            let dataError = response.error
            let resMessage = dataError.data
            setModalOpen(true)
            setMessageError(resMessage.message)
            setMessageTittle('Error')
          }else {

            let dataResponse = response.data
            let dataSuccess = dataResponse.message
            setModalOpen(true)
            setMessageError(dataSuccess)
            setMessageTittle("Success")
          }
        }))
        
         
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '794215205311-p24lfeluq0d3hpk16v4gngg6ab0sgcbv.apps.googleusercontent.com',
            callback: async (res)=> await  handleCredentialResponse(res),
            context: 'signup'
          });

          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text: 'signup_with' }  // customization attributes
          );
    }, [])

  return (
    <div>
      <div className='div-modal-signinGoogle'>
        
    
        {modalOpen === true ?
            <AlertSign
                setOpenModal={setModalOpen}
                setMessageError={messageError}
                setMessageTittle={messageTittle}/> :null}
        </div>
        <div ref={buttonDiv}></div>
    </div>
  )
}

