import { configureStore } from "@reduxjs/toolkit";
import  exampleReducer  from "./slice/exampleSlice";

const rootReducer = {
    example : exampleReducer,
}

const store = configureStore({
    reducer : rootReducer,
});

export default store;

