import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

// const counterReducer = (state = initalState, action) => {
//     if (action.type === "increase") {
//         return {
//             ...state,
//             counter: state.counter + action.value,
//         }
//     }
//     if (action.type === "increment") {
//         return {
//             ...state,
//             counter: state.counter + 1,
//         }
//     }
//     if (action.type === "decrement") {
//         return {
//             ...state,
//             counter: state.counter - 1,
//         }
//     }
//     if (action.type === "toggle") {
//         return {
//             ...state,
//             showCounter: !state.showCounter,
//         }
//     }
//     return state;
// }

const store = configureStore({
    reducer: counterSlice.reducer,
});
// const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;
export default store;