import { configureStore } from "@reduxjs/toolkit";
import exampleReducer  from "./slice/exampleSlice";
import authReducer from "./slice/authSlice";
import problemSlice from "./slice/problem-slice";

const rootReducer =  {
    example : exampleReducer,
    auth : authReducer,
    problem : problemSlice
}

const store = configureStore({
    reducer : rootReducer,
});

export default store;

