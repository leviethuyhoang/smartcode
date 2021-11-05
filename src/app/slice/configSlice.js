import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "configSlice",
    initialState : {
        data : []
    },
    reducers : {
        getConfig : (state,payload) => {
            state.data = [...payload.payload]
        }
    }      
});

const {reducer,actions} = configSlice;
export const configActions = actions;
export default reducer;
