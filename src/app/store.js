import { configureStore } from "@reduxjs/toolkit";
import exampleReducer  from "./slice/exampleSlice";
import authReducer from "./slice/authSlice";

const rootReducer =  {
    example : exampleReducer,
    auth : authReducer
}

const store = configureStore({
    reducer : rootReducer,
});

export default store;

