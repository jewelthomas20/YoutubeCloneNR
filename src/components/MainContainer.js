import React, { useEffect } from 'react'
import FilterBtnList from './FilterBtnList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openNav } from '../utils/headSlice'


const MainContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(openNav())
  },[])
  return (
    <div className='px-5' >
    <FilterBtnList/>
    <VideoContainer/>
    </div>
  )
}

export default MainContainer