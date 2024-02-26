import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name:'comment',
    initialState:[],
    reducers:{
        addNewComment:(state,action)=>{
            state.splice(9,1)
            state.unshift(action.payload)
        }
    }
})

export const {addNewComment} = commentSlice.actions;
export default commentSlice.reducer;
