import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";


const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, showCounter: true },
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

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false
        },
    },
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
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
// const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;