import React from 'react'
import Comment from './Comment'



const CommentList = ({comments}) => 
{
  return comments?.map((comment,index)=> 
  <div className='p-3'  key={index}>
    <Comment data={comment}/>
    <div className='px-2 ms-3  border-l-2 '>
    <CommentList comments={comment?.replies}/>
    </div>
    </div>
)
}

export default CommentList