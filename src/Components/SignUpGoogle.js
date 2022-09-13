import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'

export default function SignUpGoogle() {

    //let [newUser,response] = useSignUpUserMutation();

    const buttonDiv = useRef(null)

    async function handleCredentialResponse(response) { //alojaremos la respuesta

        let responsePayload = jose.decodeJwt(response.credential)
        console.log(responsePayload)

        
         
        let info = {
            name: responsePayload.given_name,
            lastName: responsePayload.family_name,
            photo: responsePayload.picture,
            email: responsePayload.email,
            password: responsePayload.sub,
            role: 'user', 
            from: 'google',
        }
        //newUser (info)
        
         // se utiliza jose, decodificador de respuesta
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
        <div ref={buttonDiv}></div>
    </div>
  )
}
