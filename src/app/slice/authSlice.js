import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "authSlice",
    initialState :{
        token : localStorage.getItem('token'),
        isLoggedIn : !!localStorage.getItem('token'),
        isAdmin : (localStorage.getItem("role") === "admin")
    },
    reducers : {
        login(state,action){
            localStorage.setItem('token',action.payload);
            localStorage.setItem('role',"admin");
            state.token = action.payload;
            state.isLoggedIn = true;
            state.isAdmin = true;
        },
        register(state,action){
            localStorage.setItem('token',action.payload);
            localStorage.setItem('role',"admin");
            state.token = action.payload;
            state.isLoggedIn = true;
            state.isAdmin = true;
        },
        logout(state){
            localStorage.removeItem('token');
            state.token = null;
            state.isLoggedIn = false;
            state.isAdmin = false;
        }       
    }
});

const {reducer,actions} = authSlice;
export const authActions = actions;
export default reducer;
