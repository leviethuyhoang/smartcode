import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    id : "",
    category : null,
    content : "",
    resolve : ""
}

const exampleSlice = createSlice({
    name : "exampleSlice",
    initialState :initialState,
    reducers : {
        getAll: (state,action) => {
            state = action.payload;
        }
    }
});

const {action,reducer} = exampleSlice;
export const exampleActions = action;
export default reducer;