import { combineReducers } from "redux";
import { TodoList } from "./TodoList/TodoReducer";

export const rootReducer = combineReducers({
  TodoList,
});
