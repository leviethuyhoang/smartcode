import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import configReducer from "./slice/configSlice";
import problemReducer from "./slice/problemSlice";
import submitionReducer from "./slice/submittionSlice";
import postReducer from "./slice/postSlice";
import lessonReducer from "./slice/lessonSlice";
import accountReducer from "./slice/accountSlice";

const rootReducer =  {
    auth : authReducer,
    config : configReducer,
    problem : problemReducer,
    submittion : submitionReducer,
    post : postReducer,
    lesson : lessonReducer,
    account : accountReducer 
}

const store = configureStore({
    reducer : rootReducer,
});

export default store;

