import { configureStore } from "@reduxjs/toolkit";
import headSlice from "./headSlice";
import searchSlice from "./customHooks/searchSlice";
import commentSlice from "./commentSlice";
import videoSlice from "./videoSlice";

const myAppStore = configureStore({
    reducer:{
        head:headSlice,
        search:searchSlice,
        comment:commentSlice,
        videos:videoSlice
    }
})

export default myAppStore;