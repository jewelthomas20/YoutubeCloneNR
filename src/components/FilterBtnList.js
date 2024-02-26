import React from 'react'
import FilterBtn from './FilterBtn'
const btnList=['Popular','Trending','Newest','Oldest','Most Viewed','Most Liked','Coding','Music','Gaming','Sports','News','Facts',]


const FilterBtnList = () => {
  return (
    <div className='flex gap-8 shrink-0 my-5  overflow-hidden'>
         {
        btnList?.map(btnName=><FilterBtn key={btnName} name={btnName}/>)
    }
    </div>
  )
}

export default FilterBtnList