import { createSlice } from '@reduxjs/toolkit';

const problemSlice = createSlice({
    name : 'problemSlice',
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = [...data.payload]
        },
        createOne : (state, data) => {
            state.data = [...state.data,data.payload];
        },
        updateOne : (state, data) => {
            const index = state.data.findIndex(item => item.id === data.payload.id)
            state.data[index] = {...state.data[index],...data.payload}
        },
        deleteOne : (state, data) => {
            state.data = state.data.filter(item => item.id !== data.payload);
        }   
    }
})

const {reducer,actions} = problemSlice;
export const problemActions = actions;
export default reducer;