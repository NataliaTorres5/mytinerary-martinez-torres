import React from 'react'
import {useDeleteCommentMutation} from '../../features/commentAPI.js'
import { useDispatch } from 'react-redux'
import { recharge } from '../../features/rechargeSlice'

export default function DeleteComment(props) {

    const [deleteComment] = useDeleteCommentMutation() // trae el metodo deeliminar 
    //const recharge = useSelector((state) => state.recharge.rechargeState) 
    const dispatch = useDispatch() // para hacer uso del slice de recargar pagina

   console.log(props.comment)

    async function commentDelete() {
        try {
            let response = await deleteComment(props.comment) // si se pasa el id por el se regarga la pagina y se elimmina el comment con el id 
            if (response.data?.success) {

                console.log(response);
                dispatch(recharge())
            }else{
                console.log(response.error)
                dispatch(recharge())
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <button className='CommentDeleteButton' onClick={commentDelete}><img src='../../icons/Booking.png' /></button>
  )
}
