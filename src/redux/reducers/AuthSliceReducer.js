import {createSlice} from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:"Auth",
    initialState: {user: null},
    reducers:{
        LogInUser:(state,action)=>{
            state.user = action.payload;
        },
        LogOutUser:(state)=>{
            state.user = null;
        }
    }
})

export const {LogInUser, LogOutUser} = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;