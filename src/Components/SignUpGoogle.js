import React, { useEffect } from 'react'
import * as jose from 'jose'

export default function SignUpGoogle() {

    useEffect(() => {
         google.accounts.id.initialize({
            client_id: 794215205311-p24lfeluq0d3hpk16v4gngg6ab0sgcbv.apps.googleusercontent.com,
            callback: handleCredentialResponse, //manejador de la respuesta de la credencial
         })
    }, {})


  return (
    <div></div>
  )
}
