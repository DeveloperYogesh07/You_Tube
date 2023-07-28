import { createSlice } from "@reduxjs/toolkit";

const serachSlice = createSlice({
    name:'serach',
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            state = Object.assign(state,action.payload);
        }
    }
}
    
)

export const {cacheResults} = serachSlice.actions;
export default serachSlice.reducer;
