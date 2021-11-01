import { createSlice } from "@reduxjs/toolkit";

const ProblemSlice = createSlice(
    {
        name : 'problem',
        initialState :{
            problem : [
            {
                id: '1',
                title: 'giải phương trình bậc 2',
                content: ' a',
                author: 'loi',
              },
              {
                id: '2',
                title: 'giải phương trình bậc 3',
                content: ' b',
                author: 'loi',
              },
              {
                id: 'loi',
                title: 'tìm đường đi ngắn nhất',
                content: ' c',
                author: 'loi',
              },
              {
                id: '4',
                title: 'Big O',
                content: ' d',
                author: 'loi',
              },
              {
                id: '14',
                title: 'giai phuong trinh bac 2',
                content: ' e',
                author: 'loi',
              },
              {
                id: '5',
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
                content: ' m',
                author: 'loi',
              },
              {
                id: '14',
                title: 'giai phuong trinh bac 2',
                content: ' n',
                author: 'loi',
              },
              
        ],
        ProblemDetail :{}
    },
        reducers:
        {
            showProblemDetail(state,action){
                const ProblemDetail = action.id;
                const ShowProblemDetailnew = state.problem.findIndex(problem =>problem.id === ProblemDetail);
                const ProblemDetailNew ={
                  id: ShowProblemDetailnew.id,
                  author : ShowProblemDetailnew.author,
                  content : ShowProblemDetailnew.content,
                  title : ShowProblemDetailnew.title
                }
                state.ProblemDetail = ProblemDetailNew;
              }
        }
    }
)
export const ProblemAction = ProblemSlice.actions;

export default ProblemSlice.reducer;