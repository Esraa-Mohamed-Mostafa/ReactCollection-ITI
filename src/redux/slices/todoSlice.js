import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
         globalAdd: (state,action) => { state.push(action.payload);
            return state },
        //  globalRemove: (state,action) => { state.value += 1 }

    }
})
export const { globalAdd}  =todoSlice.actions;
export default todoSlice.reducer;
console.log(todoSlice)