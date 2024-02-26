import React from 'react'

const LiveComment = ({name,comment}) => {
  return (
    <div className='flex justify-start items-center gap-3  p-2 border rounded-md bg-gray-50 m-2 '>
    <img  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" className='rounded-full h-8'/>
    <span>{name} : </span>
    <span>{comment}</span>
    </div>
  )
}

export default LiveComment