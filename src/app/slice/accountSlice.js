const { createSlice } = require("@reduxjs/toolkit");

const accountSlice = createSlice({
    name : "accountSlice",
    initialState : {
        data : null
    },
    reducers : {
        getMany : (state,data) => {
            state.data = data.payload
        },
        updateOne : (state,data) => {
            const payload = data.payload;
            if(state.data){
                const index = state.data.findIndex(item => +item.id === +payload.id)
                const oldData = state.data[index] ;
                state.data[index] = {...oldData,...payload}
            }
        }
    }
})

const {actions, reducer} = accountSlice;
export const accountActions = actions;
export default reducer;