import React from 'react'

const VideoCard = ({videoInfo}) => {
    const {snippet,id} = videoInfo;
    const {title,description,thumbnails,channelTitle
    } = snippet;
  return (
    <div className='max-w-[300px] overflow-hidden p-1 border rounded shadow-md cursor-pointer'>
       <img  src={thumbnails?.medium?.url} alt={title} /> 
       <h1 className='font-bold text-lg'>{title?.slice(0,20)+'.....'}</h1>
       <h6>{description?.slice(0,25)+'.....'}</h6>
       <span className='font-bold'>{channelTitle}</span>
    </div>
  )
}

export default VideoCard