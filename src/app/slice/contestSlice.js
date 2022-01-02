import { createSlice } from "@reduxjs/toolkit";
// import contestApi from "api/contestApi";

const contestSlice = createSlice({
  name: "contestSlice",
  initialState: {
    data: null,
  },
  reducers: {
    getMany : (state, data) => {
     state.data = data.payload;
    },
    createOne: (state, data) => {
      if(state.data === null)
      {
        state.data = [data.payload];
      } else {
        state.data.push(data.payload);
      }
    },
    editOne : (state, data) => {
      const contestEdit = data.payload;
      const index = state.data.findIndex(contest =>contest.id.toString() === contestEdit.id.toString());
      state.data[index] = data.payload;
    },
    deleteOne : (state, data) => {
      const contestEdit = data.payload;
      state.data = state.data.filter(contest =>contest.id.toString() !== contestEdit.toString());
    },
    join : (state, data) => {
        const id = data.payload;
        const index = state.data.findIndex(contest =>contest.id.toString() === id.toString());
        state.data[index].isJoined = true;
    }
  },
});

export const GetContest = (data) => {

  return (dispatch) => {
      // const configData = (res) => {
      //     dispatch(contestAction.getMany(res.results))
      // }
      // SendReqest(contestApi.getMany, configData)
      dispatch(contestAction.getMany(data))
  } 
}


const { actions, reducer } = contestSlice;
export const contestAction = actions;
export default reducer;
