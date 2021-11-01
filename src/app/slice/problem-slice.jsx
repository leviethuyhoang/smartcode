import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  problems: [
    {
      id:'1',
      title: 'giải phương trình bậc 2',
      content: ' a',
      author: 'loi',
    },
    {
      id:'2',
      title: 'giải phương trình bậc 3',
      content: ' b',
      author: 'loi',
    },
    {
      id:'3',
      title: 'tìm đường đi ngắn nhất',
      content: 'c',
      author: 'loi',
    },
    {
      id:'4',
      title: 'Big O',
      content: ' d',
      author: 'loi',
    },
    {
      id:'14',
      title: 'giai phuong trinh bac 2',
      content: ' e',
      author: 'loi',
    },
    {
      id:'5',
      title: 'giai phuong trinh bac 2',
      content: ' f',
      author: 'loi',
    },
    {
      id: '6',
      title: 'giai phuong trinh bac 2',
      content: ' g',
      author: 'loi',
    },
    {
      id: '7',
      title: 'giai phuong trinh bac 2',
      content: ' h',
      author: 'loi',
    },
    {
      id: '8',
      title: 'giai phuong trinh bac 2',
      content: ' y',
      author: 'loi',
    },
    {
      id: '9',
      title: 'giai phuong trinh bac 2',
      content: ' j',
      author: 'loi',
    },
    {
      id: '10',
      title: 'giai phuong trinh bac 2',
      content: ' k',
      author: 'loi',
    },
    {
      id: '11',
      title: 'giai phuong trinh bac 2',
      content: ' h',
      author: 'loi',
    },
    {
      id: '12',
      title: 'giai phuong trinh bac 2',
      content: ' l',
      author: 'loi',
    },
    {
      id: '13',
      title: 'giai phuong trinh bac 2',
      content: 'm',
      author: 'loi',
    },
    {
      id: '14',
      title: 'giai phuong trinh bac 2',
      content: 'n',
      author: 'loi',
    },
  ],

  ListProblemDetail: {
    id: '',
    content: '',
    author: '',
    title: '',
  },
};

const ProblemSlice = createSlice({
  name: 'showProblem',
  initialState: initialState,
  reducers: {
    showProblemDetail(state, action) {
      const id = action.payload;
      const ShowProblemDetailnew = state.problems.findIndex(problem=>problem.id === id.id);
    
      const  Detail = state.problems[ShowProblemDetailnew];
      state.ListProblemDetail = {
        id : Detail.id,
        content : Detail.content,
        author : Detail.author,
        title : Detail.title
      }
      
      
    },
  },
});
const { reducer, actions } = ProblemSlice;
export const ProblemAction = actions;

export default reducer;
