import { createSlice } from "@reduxjs/toolkit";

const initialValues = {

}

const submittionSlice = createSlice({
    name : "submitSlice",
    initialState : initialValues,
    reducers : {
        getAll : (state,action) => {
            
        }
    }
});

const {action,reducer} = submittionSlice;
export const submitActions = action;
export default reducer;