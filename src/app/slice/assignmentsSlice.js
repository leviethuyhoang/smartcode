import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : null
}

const assignmentSlice = createSlice({
    name : "assignmentSlice",
    initialState :initialState,
    reducers : {
        getMany: (state,data) => {
            state.data = data.payload;
        },
        updateOne : (state, data) => {

        },
        createOne : (state, data) => {

        },
        deleteOne : (state, data) => {

        }
    }
});

const {action,reducer} = assignmentSlice;
export const assignmentActions = action;
export default reducer;