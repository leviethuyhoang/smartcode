import { createSlice } from "@reduxjs/toolkit";

const lessSlice = createSlice({
    name : "lessSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = [...data.payload]
        },
        addLesson : (state, data) => {
            if(state.data){
                state.data.push(data.payload)
            } else {
                state.data = [...data.payload]
            }
        }
    }      
});

const {reducer,actions} = lessSlice;
export const lessActions = actions;
export default reducer;
