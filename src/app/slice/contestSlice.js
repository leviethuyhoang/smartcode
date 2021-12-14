import { createSlice } from "@reduxjs/toolkit";

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
    editOne : (state, data) =>
    {
      const contestEdit = data.payload;
      const dataEditNew = state.data.findIndex(contest =>contest.id.toString() === contestEdit.id.toString());
      const newList =[...state.data];
      newList[dataEditNew] = contestEdit;
      state.data = newList;  
    },
    deleteOne : (state, data) =>
    {
      const contestEdit = data.payload;
      const dataEditNew = state.data.filter(contest =>contest.id.toString() !== contestEdit.toString());
      state.data = dataEditNew;  
    }
  },
});
const { actions, reducer } = contestSlice;
export const contestAction = actions;
export default reducer;
