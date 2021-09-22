import { configureStore } from "@reduxjs/toolkit";
import  exampleReducer  from "./slice/exampleSlice";
import cusmizationReducer from "./slice/customizationReducer";

const rootReducer = {
    example : exampleReducer,
    customization : cusmizationReducer
}

const store = configureStore({
    reducer : rootReducer,
});

export default store;

