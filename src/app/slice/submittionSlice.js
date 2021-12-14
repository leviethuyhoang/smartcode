import { createSlice } from "@reduxjs/toolkit";

const initialValues =  {
    data : []
};

const submittionSlice = createSlice({
    name : "submittionSlice",
    initialState : initialValues,
    reducers : {
        getAll : (state,data) => {
            state.data = [data.payload];
        }
    }
});

const {actions,reducer} = submittionSlice;
export const submittionActions = actions;
export default reducer;