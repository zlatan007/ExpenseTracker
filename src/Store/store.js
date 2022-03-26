import { createStore } from "redux";
import { mainReducer } from "./Reducer/mainReducer";

const initialState = {};
const store = createStore(mainReducer, initialState);

export default store;