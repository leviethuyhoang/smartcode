import { createSlice } from "@reduxjs/toolkit";

const submittionSlice = createSlice({
    name : "submittionSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = data.payload;
        }
    }
});

const {actions,reducer} = submittionSlice;
export const submittionActions = actions;
export default reducer;