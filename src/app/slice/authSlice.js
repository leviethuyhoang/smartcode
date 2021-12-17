import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "authSlice",
    initialState :{
        token : localStorage.getItem('accessToken'),
        isLoggedIn : !!localStorage.getItem('accessToken'),
        isAdmin : (localStorage.getItem("role") === "admin")
    },
    reducers : {
        login(state,data){
            localStorage.setItem('accessToken',data.payload.accessToken);
            localStorage.setItem('refreshToken',data.payload.refreshToken);
            localStorage.setItem('role',"admin");
            state.token = data.payload.accessToken;
            state.refreshToken = data.payload.refreshToken;
            state.isLoggedIn = true;
            state.isAdmin = true;
        },
        register(state,data){
            localStorage.setItem('accessToken',data.payload.accessToken);
            localStorage.setItem('refreshToken',data.payload.refreshToken);
            localStorage.setItem('role',"admin");
            state.token = data.payload.accessToken;
            state.refreshToken = data.payload.refreshToken;
            state.isLoggedIn = true;
            state.isAdmin = true;
        },
        logout(state){
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            state.token = null;
            state.isLoggedIn = false;
            state.isAdmin = false;
        }       
    }
});

const {reducer,actions} = authSlice;
export const authActions = actions;
export default reducer;
