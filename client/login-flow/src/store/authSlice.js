import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading:false,
    status: false,
    userData : null,
    error:null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
          state.status = true  
          state.userData = action.payload.userData;
        }
        
    }
}) 
export const {login} = authSlice.actions;
export default authSlice.reducer;