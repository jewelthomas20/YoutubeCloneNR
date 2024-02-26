import React, { useEffect, useState } from 'react'
import LiveComment from './LiveComment'
import { useDispatch, useSelector } from 'react-redux'
import { addNewComment } from '../utils/commentSlice'
function getRandomOutput() {
    const names = ['John', 'Alice', 'Bob', 'Emily', 'louis'];
    const comments = ['Great video', 'Nice content', 'Informative', 'Interesting topic', 'Well done'];
  
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];
  
    return { name: randomName, comment: randomComment };
  }
const LiveCommentContainer = () => {
    const [addComment,setAddComment] = useState({name:"",comment:""})
    const comments = useSelector(store=>store.comment)
    const dispatch = useDispatch()
    useEffect(()=>{
        const addCommentInterval = setInterval(()=>{
            //dispatch({type:addNewComment,payload:{name:'Jewel Thomas',comment:'I love this video'}}) this syntax is for useReducer
            dispatch(addNewComment(getRandomOutput()))
        },500)
        return ()=>clearInterval(addCommentInterval)


    },[])
  return (
    <div className='w-1/3'>
    <div className='border w-full h-[500px] flex  flex-col-reverse overflow-auto'>
    {
        comments?.map((commentData,i)=>  <LiveComment key={i} name={commentData?.name} comment={commentData?.comment}/> )
    }
    </div>
    <div className='flex justify-between gap-2 py-1'>
    <input type='text' className='border rounded w-full p-2' placeholder='Add a public comment' value={addComment.comment} onChange={(e)=>setAddComment({...addComment,name:"jewel",comment:e.target.value})}/>
    <button className='p-3 border rounded' onClick={()=>{dispatch(addNewComment(addComment))
     setAddComment({name:"",comment:""})
    }}>Send</button>
    </div>
    </div>
  )
}

export default LiveCommentContainer