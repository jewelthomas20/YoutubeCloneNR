import React from 'react'

const Comment = ({data}) => {
    const {name, comment} = data
  return (
    <div className='flex gap-5 p-3 bg-gray-200  rounded-lg' >
        <img className='w-10 h-10' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt=''/>
        <div>
            <h3 className='text-bold text-lg'>{name}</h3>
            <h5 className=''>{comment}</h5>
        </div>
    </div>
  )
}

export default Comment