import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name : "postSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = data.payload
        },
        createOne : (state, data) => {
            if(state.data === null){
                state.data = [...data.payload]
            } else {
                state.data.push(data.payload);
            }
        },
        updateOne : (state, data) => {
            const id = state.data.findIndex(post => post.id === data.payload.id)
            state.data[id] = {...state.data[id],...data.payload}
        }
    }      
});

const {reducer,actions} = postSlice;
export const postActions = actions;
export default reducer;
