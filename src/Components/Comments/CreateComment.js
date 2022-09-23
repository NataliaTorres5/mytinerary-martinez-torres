import React, { useRef, useState } from 'react'
import { useCreateCommentMutation } from '../../features/commentAPI.js'
import { useDispatch, useSelector } from 'react-redux'
import { recharge } from '../../features/rechargeSlice'



export default function CreateComment(props) {

    let user = useSelector((state) => state.logged.userState)//establece el estado del usuario dque viene del back
    
    console.log(user)

    //place where the comment is taken from
    const input = useRef()

    //to place reload of the page

    const dispatch = useDispatch()

    //used for showing the user data  in  the return 
    let userID = user.id
    let itineraryID = props.id

    console.log(props)

    // used to create the action of writing a comment 

    const [unRoll, setUnRoll] = useState(false)
    const [createComment] = useCreateCommentMutation()


    function handleCommentCreation(e) {
        e.preventDefault()

        let NewComment = {
            user: userID,
            itinerary: itineraryID,
            comment: input.current.value
        }

        console.log(NewComment)
        createComment(NewComment).then((response) => {
            if (response.error) {
                let dataError = response.Error;
                let dataMessage = dataError.data
                //alert when we install it error message
            } else {
                let dataResponse = response.data;
                let dataMessage = dataResponse.dataMessage
                //alertwhen we weinstalle it success message
                console.log(response)
            }
        })

    }

    function rollComment() {
        if (unRoll) {
            setUnRoll(false);
        } else {
            setUnRoll(true)
        }

    }

    return (

        <>
            <div>
                <button onClick={rollComment}>
                    Write a Comment
                </button>
                {unRoll ? (
                    <>
                        <form >
                            <img src="" alt='Avatar' />
                            <label htmlfor="commentInput">

                            <input id="commentInput" type="text" placeholder='Add a comment' ref={input}/>

                            </label>


                            <input  onClick={handleCommentCreation}  type="submit" value="Submit" />
                        </form>

                    </>

                ) : null}
            </div>


        </>

    )
}





