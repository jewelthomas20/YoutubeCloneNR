import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleNav } from "../utils/headSlice"
import { YOUTUBE_SEARCH_CLICK_URL, YOUTUBE_SEARCH_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import { cacheSearchResults } from "../utils/customHooks/searchSlice"
import { addSearchedVideo } from "../utils/videoSlice"


const Header = () => {
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const searchCache = useSelector(store=>store.search)
  
 
  const fetchSearch = async (query) => {
    const response = await (await fetch(YOUTUBE_SEARCH_URL + query)).json()
    setSearchResult(response[1])
    dispatch(cacheSearchResults({[searchInput]: response[1]}))
  }
  const fetchSearchResultData = async (searcInput) => {
    const response =await(await fetch(YOUTUBE_SEARCH_CLICK_URL+searcInput)).json();
    dispatch(addSearchedVideo(response?.items))
}

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) setSearchResult(searchCache[searchInput])
      else if (searchInput?.trim() !== "") fetchSearch(searchInput)  
      else setSearchResult([])
    }, 500)
    return () => clearTimeout(timer)
  }, [searchInput])

  return (
    <div className="grid grid-flow-col p-3 ">
      <div className="flex col-span-1 align-middle ">
        <img
          className="h-8 mx-2 mt-3 cursor-pointer "
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          }
          alt="hamburger"
          onClick={() => dispatch(toggleNav())}
        />
        <Link to="/">
        <img
          className="h-14 "
          src={"https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"}
          alt="logo"
          onClick={()=> setSearchResult([])}
        />
       </Link>
      </div>
      <div className="col-span-10 flex justify-center mt-2 relative">
        <input
          className="w-2/4 h-10 px-5 p-2 border rounded-l-full"
          type="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
        />
        <input className="px-3 py-2 h-10 border rounded-r-full" type="button" value="🔍" />
        {searchResult?.length > 0 && (
          <div className="absolute w-2/4 top-10 left-[23.2%] p-2 rounded-b-md bg-gray-50">
            <ul>
            {
              searchResult?.map(listItem=><li key={listItem} onClick={()=>{fetchSearchResultData(listItem)
              setSearchResult([])
              }} className="hover:bg-gray-200 my-1 p-2 rounded-lg">{listItem}</li>)
            }
              
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8 mt-2 ms-auto"
          src={"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"}
          alt="avatar"
        />
      </div>

    </div>
  )
}

export default Header
