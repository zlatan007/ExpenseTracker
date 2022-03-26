import { combineReducers } from "redux";
import { addReducer } from "./addReducer";

export const mainReducer = combineReducers({
    add: addReducer
})