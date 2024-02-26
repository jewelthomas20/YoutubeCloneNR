import { createSlice } from "@reduxjs/toolkit";

const headSlice = createSlice({
    name: "head",
    initialState:{
        navState:true,
    },
    reducers:{
        toggleNav: (state)=> {state.navState = !state.navState},
        closeNav: (state)=> {state.navState = false},
        openNav: (state)=> {state.navState = true}
    }
})

export const {toggleNav,closeNav,openNav} = headSlice.actions;
export default headSlice.reducer;