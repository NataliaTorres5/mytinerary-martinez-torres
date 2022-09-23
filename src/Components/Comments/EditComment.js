import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useEditCommentMutation } from '../../features/commentAPI.js'

import { recharge } from '../../features/rechargeSlice'

export default function EditComment(props) {

    const [editComment] = useEditCommentMutation() // trael el metodo de editar comentario del api

    const user = useSelector((state) => state.logged.userState)  // tiene en cuenta el estado en el que se encuentra el usuario

    const comment = props.comment // pasa los props de commentarios

    console.log(comment)

    const [commentValue, setCommentValue] = useState(comment.comment)

console.log(user)
    const dispatch = useDispatch()

    async function editclickComment() {
        try {
            let res = await editComment({ id: comment._id, comment: commentValue })
            if (res.data?.success) {
                dispatch(recharge())
            } else {
                console.log(res.error)
            }
        } catch (error) {
            console.log(error)
        }

        function input(params) {
          
        }

    }
    return (
        <div>

        
          {/* // ((user && user.role === "admin") || (user && user?.id === comment.user._id)) && */}
          <div className='Comment-buttons-container'>
            <button className='edit-btn' onClick={editclickComment} type="button">Edit Comment</button> 
          </div>
        

      </div>
    )
}
