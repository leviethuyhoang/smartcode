import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "configSlice",
    initialState :{
        fetched : false,
        data : []
    },
    reducers : {
        getConfig : (state,payload) => {
            state.data = {...payload}
            state.fetched = true
        }
    }      
});

const {reducer,actions} = configSlice;
export const configActions = actions;
export default reducer;
