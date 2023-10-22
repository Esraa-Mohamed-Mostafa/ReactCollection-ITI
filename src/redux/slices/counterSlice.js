import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 10 },
    reducers: {
        globalIncrement: (state) => { state.value += 1 },
        globalDecrement: (state) => { state.value += 1 }

    }
})
export const {globalIncrement,globalDecrement}=counterSlice.actions;
export default counterSlice.reducer;
console.log(counterSlice)




// import { createSlice } from "@reduxjs/toolkit";
// const intialState = {counter: 10,}
// export const counterSlice = createSlice({name: 'counter',intialState,
//      reducers: {
//         increment: (state) => {  state.counter = state.counter + 1 },
//         decrement: (state) => {  state.counter = state.counter - 1 },
//     }})
// export const {increment,decrement} = counterSlice.actions;