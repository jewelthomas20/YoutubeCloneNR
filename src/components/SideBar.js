import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const navState = useSelector(store=>store.head.navState)
    if (!navState) return null  
  return (
    <div className='min-w-[140px] h-[89.5vh] bg-gray-100'>
    <nav>
    <ul className='p-2 font-sans '>
        <li className='my-3 ms-2 hover:bg-gray-100 '><Link to={'/'}> Home</Link></li>
        <li className='my-3 ms-2 hover:bg-gray-100 '>Explore</li>
        <li className='my-3 ms-2 hover:bg-gray-100 '>Subscriptions</li>
        <li className='my-3 ms-2 hover:bg-gray-100 '>Library</li>
        <li className='my-3 ms-2 hover:bg-gray-100 '>History</li>
    </ul>
    </nav>
    </div>
  )
}

export default SideBar