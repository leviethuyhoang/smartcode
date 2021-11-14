import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name : "postSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = [...data.payload]
        }
    }      
});

const {reducer,actions} = postSlice;
export const postActions = actions;
export default reducer;
