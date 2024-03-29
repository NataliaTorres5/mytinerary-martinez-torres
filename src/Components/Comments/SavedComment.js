
import React from 'react'
import { useGetAllCommentsMutation } from '../../features/commentAPI.js'
import EditComment from './EditComment.js'
import DeleteComment from './DeleteComment.js'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recharge } from '../../features/rechargeSlice'


export default function SavedComment(props) {
  const recharge = useSelector((state) => state.recharge.rechargeState) 
  const user = useSelector((state) => state.logged.userState) 


  //console.log(props.itinerary)
  const dispatch = useDispatch()

  const [ getAllComments ] = useGetAllCommentsMutation()
  const [comments, setComments] = useState([])

  async function getallComments() {
    
    console.log('hola');
    try {
        let res = await getAllComments(props.itinerary._id)
        if (res.data?.success) {
         console.log(res.data);
            setComments(res.data.response)
        } else {
            console.log(res.error)
        }
    } catch (error) {
        console.log(error)
    }
}


 // console.log(comments)

useEffect(() => {
  getallComments()
}, [recharge])


  const commentPic = (item) => (

    <div className="comment-box">
      <h3>  {item.user.name} </h3>
      <img src='../../icons/user1.png' alt=""/>
      <p>{item.comment}  </p>

       {(user && user.id === item.user._id ) && <DeleteComment comment={item._id} />}

       {((user && user.role === "admin") || (user && user?.id === item.user._id)) && <EditComment comment={item} />}

      
    

    </div>

  )

  return (
    <>
      <div>
        {comments?.map(commentPic)}
      </div>
    </>
  )
}
