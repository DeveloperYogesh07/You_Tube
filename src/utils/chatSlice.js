import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

 const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messeges:[]

    },
    reducers:{
        addMessege:(state,action)=>{
            state.messeges.splice(LIVE_CHAT_COUNT,1)
            state.messeges.unshift(action.payload);
        }
    }
 })


 export const {addMessege} = chatSlice.actions;


 export default chatSlice.reducer;