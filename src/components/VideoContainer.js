import React, { useEffect, useState } from 'react'
import {YOUTUBE_LIVE_URL, YOUTUBE_URL} from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewVideo } from '../utils/videoSlice'

const VideoContainer = () => {
  const dispatch = useDispatch()
  const videoData = useSelector(store=>store.videos)
    const fetchSuggestedVideos = async () => {
        const response =await(await fetch(YOUTUBE_URL)).json();
        dispatch(addNewVideo(response?.items))
    }
    const fetchLiveVideo = async () => {
      const response =await(await fetch(YOUTUBE_LIVE_URL)).json();
      dispatch(addNewVideo(response?.items))
    }
    useEffect(() => {
        fetchSuggestedVideos()
    }, [])
  
  return (
    <>
       <div className='flex gap-3 my-2'>
      <button className='p-2 border rounded-lg' onClick={fetchLiveVideo}>Live</button>
      <button className='p-2 border rounded-lg' onClick={fetchSuggestedVideos}>Suggested Videos</button>
    </div>
    <div className='flex gap-5 flex-wrap'>
    {
      videoData?.map(video=><Link key={video.id.videoId} to={'/watch?w='+video?.id?.videoId}> <VideoCard  videoInfo={video}/></Link>)

    }
    </div>
    </>
  )
}

export default VideoContainer