import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import apiurl from '../api';
import axios from 'axios'



export default function CommentCard() {

    /* const { id } = useParams()
 
     const  [commentCards, setCommentCards]  = useState([])
 
     useEffect(() => {
         axios.get(apiurl + '/comments/')
             .then(response => {
                 setCommentCards(response.data.response)
             }
             )
 
     }, [id])*/


    return (
        <>


            <div className='Details-Container'>
                <div>
                <h3> Cinthya Di Risio </h3>
                <img src="https://i.im.ge/2022/09/04/Ocuw4P.Cindy.png" alt="user"/>
                </div>
                <h2>Amazing Place to go and visit</h2>
            </div>
            <div className='Details-Container'>
            <div>
                <h3> Laura Martinez  </h3>
                <img src="https://i.im.ge/2022/09/04/OcuNs1.Lau.png" alt="user"/>
                </div>
                <h2>Great I want to return every single year</h2>
            </div>
            <div className='Details-Container'>
            <div>
                <h3> Natalia Torres</h3>
                <img src="https://i.im.ge/2022/09/04/Ocum3p.Nati.png" alt="user"/>
                </div>
                <h2>I'ts ok</h2>
            </div>

        </>

    )
}
