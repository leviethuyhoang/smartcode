import { createSlice } from '@reduxjs/toolkit';

const problemSlice = createSlice({
    name : 'problemSlice',
    initialState : {
        data : []
    },
    reducers : {
        getMany : (state,payload) => {
            state.data = [...payload.payload]
        }
    }
})

const {reducer,actions} = problemSlice;
export const problemActions = actions;
export default reducer;