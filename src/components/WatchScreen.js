import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeNav} from '../utils/headSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveCommentContainer from './LiveCommentContainer'

const WatchScreen = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(closeNav())
  },[])  
  const [searchParams] = useSearchParams()

  return (
    <div className=' w-full h-[90vh]'>
    <div className='flex gap-2 p-5'>
      <iframe  width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get('w')}?si=VfBenNLumLJ3zOiq`} title="YouTube video player" frameBorder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
    <LiveCommentContainer/>
    </div>
      <CommentContainer/>
    </div>
  )
}

export default WatchScreen