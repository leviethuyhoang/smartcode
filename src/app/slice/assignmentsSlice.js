import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetched : false,
    data : []
}

const assignmentSlice = createSlice({
    name : "assignmentSlice",
    initialState :initialState,
    reducers : {
        getAll: (state,action) => {
            state.data = action.payload;
        }
    }
});

const {action,reducer} = assignmentSlice;
export const assignmentActions = action;
export default reducer;