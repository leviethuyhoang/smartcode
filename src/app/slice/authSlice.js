import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const decodeJWTToken = (token) => {

    if(token){
        return jwtDecode(token)
    }

    return null;

}

const authSlice = createSlice({
    name : "authSlice",
    initialState :{
        token : localStorage.getItem('accessToken'),
        isLoggedIn : !!localStorage.getItem('accessToken'),
        isAdmin : decodeJWTToken(localStorage.getItem('accessToken'))?.user?.isAdmin
    },
    reducers : {
        login(state,data){
            localStorage.setItem('accessToken',data.payload.accessToken);
            localStorage.setItem('refreshToken',data.payload.refreshToken);
            state.token = data.payload.accessToken;
            state.refreshToken = data.payload.refreshToken;
            state.isLoggedIn = true;
            state.isAdmin = decodeJWTToken(data.payload.accessToken).user.isAdmin;
        },
        register(state,data){
            localStorage.setItem('accessToken',data.payload.accessToken);
            localStorage.setItem('refreshToken',data.payload.refreshToken);
            state.token = data.payload.accessToken;
            state.refreshToken = data.payload.refreshToken;
            state.isLoggedIn = true;
            state.isAdmin = decodeJWTToken(data.payload.accessToken).user.isAdmin;
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
