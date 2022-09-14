import React, { useEffect, useRef } from 'react'
import { useSignInUserMutation } from '../features/userAPI';
import * as jose from 'jose'

export default function SignInGoogle() {

    let [user,response] = useSignInUserMutation();

    const buttonDiv = useRef(null)

    async function handleCredentialResponse(response) { //alojaremos la respuesta

        let responsePayload = jose.decodeJwt(response.credential)
        console.log(responsePayload)

        
  
        let info = {
          
            email: responsePayload.email,
            password: responsePayload.sub, 
            from: 'google',
        }
         user (info)
         .then(response => console.log(response))
         .catch(error => console.log(error))



         //divpatch que va a user slice
         //use selector se extrae el estado de
        
         // se utiliza jose, decodificador de respuesta
    }

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
    <div>
        <div ref={buttonDiv}></div>
    </div>
  )
}
