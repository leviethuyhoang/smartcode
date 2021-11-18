import { createSlice } from "@reduxjs/toolkit";

const lessSlice = createSlice({
    name : "lessSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = data.payload
        },
        createOne : (state, data) => {
            if(state.data === null) {
                const result = [data.payload]
                state.data = result;
            } else {
                const result = [...state.data,data.payload]
                state.data = result;
            }
        },
        updateOne : (state, data) => {
            const id = state.data.findIndex(lesson => lesson.id === data.payload.id)
            state.data[id] = {...state.data[id],...data.payload};
        }
        
    }      
});

const {reducer,actions} = lessSlice;
export const lessActions = actions;
export default reducer;
