import { createSlice } from '@reduxjs/toolkit';
import problemApi from 'api/problemApi';

const problemSlice = createSlice({
    name : 'problemSlice',
    initialState : {
        data : null,
        showDetail : []
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
        },
        showDetail : ( state,data) => {   
            state.showDetail = state.data.find(state=>state.id === data.payload);
        } 
    }
})

export const GetProblem = (SendReqest) => {

    return async (dispatch) => {
        const configData = (res) => {
            dispatch(problemActions.getMany(res.results))
        }
        SendReqest(problemApi.getMany, configData)
    } 
}

const {reducer,actions} = problemSlice;
export const problemActions = actions;
export default reducer;