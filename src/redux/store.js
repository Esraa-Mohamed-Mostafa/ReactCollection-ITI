import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";


export const store = configureStore({
    reducer: {counterSlice },
    reducer:{todoSlice}
})

// import { configureStore } from "@reduxjs/toolkit";
// import  counterSlice  from "./slices/counterSlice";
// console.log(counterSlice)
// export const store = configureStore({ reducer: {counterSlice}, });
