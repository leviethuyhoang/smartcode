import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "configSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = data.payload
        }
    }      
});

const {reducer,actions} = configSlice;
export const configActions = actions;
export default reducer;
