import { createSlice } from "@reduxjs/toolkit";



const exampleSlice = createSlice({
    name : "exampleSlice",
    initialState : [],
    reducers : {
        onExampleReducer(state,action){
            
        }
    }
});

const {reducer,action} = exampleSlice;
export const exampleActions = action;
export default reducer;