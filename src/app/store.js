import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import configReducer from "./slice/configSlice";
import problemReducer from "./slice/problemSlice";
import submitionReducer from "./slice/submittionSlice";

const rootReducer =  {
    auth : authReducer,
    config : configReducer,
    problem : problemReducer,
    submittion : submitionReducer,
}

const store = configureStore({
    reducer : rootReducer,
});

export default store;

