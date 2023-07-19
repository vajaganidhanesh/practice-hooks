import { combineReducers } from "redux";
import { TodoList } from "./TodoReducer";

export const rootReducer = combineReducers({
  TodoList,
});
