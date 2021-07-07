import { combineReducers } from "redux";

import { fightersReducer } from "./fighters";
import { combatReducer } from "./combat";

export default combineReducers({
    fightersReducer, combatReducer
})