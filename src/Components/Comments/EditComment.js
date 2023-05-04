import React, { useState, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useEditCommentMutation } from '../../features/commentAPI.js'

import { recharge } from '../../features/rechargeSlice'

export default function EditComment(props) {

    const input = useRef()

    const [unRoll, setUnRoll] = useState(false)
    const [editComment] = useEditCommentMutation() // trael el metodo de editar comentario del api

    const user = useSelector((state) => state.logged.userState)  // tiene en cuenta el estado en el que se encuentra el usuario

    const comment = props.comment // pasa los props de commentarios

    console.log(comment)

    const [commentValue, setCommentValue] = useState(comment.comment)

    console.log(user)

    const dispatch = useDispatch()


    async function editclickComment(e) {
        e.preventDefault()
        try {
            let res = await editComment({ id: comment._id, comment: input.current.value })
            if (res.data?.success) {
                dispatch(recharge())
            } else {
                console.log(res.error)
            }
        } catch (error) {
            console.log(error)
        }

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
                Edit a Comment
            </button>
            {unRoll ? (
                <>
                    <form >
                        <img src="" alt='Avatar' />
                        <label htmlfor="commentInput">

                        <input id="commentInput" type="text" placeholder='Add a comment' ref={input}/>

                        </label>


                        <input  onClick={editclickComment}  type="submit" value="Submit" />
                    </form>

                </>

            ) : null}
        </div>



    </>
        
    )
}

