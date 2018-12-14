import { combineReducers } from "redux";
import addTask from "./addTaskReducer";
import changeText from "./changeTextReducer";

export default combineReducers({
    addTask,
    changeText,
})
