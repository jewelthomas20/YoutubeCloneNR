import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"videos",
    initialState:[],
    reducers:{
        addNewVideo:(state,action)=>{
            state=action.payload
           return state
        },
        addSearchedVideo:(state,action)=>{
            state=action.payload
            return state
        }
        
    }
})

export const {addNewVideo,addSearchedVideo} = videoSlice.actions;
export default videoSlice.reducer;