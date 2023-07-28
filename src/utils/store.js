import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import serachSlice from "./serachSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer:{
    app: appSlice,
    search:serachSlice,
    chat:chatSlice 
  }
});

export default store;