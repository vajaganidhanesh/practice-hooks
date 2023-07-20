import { combineReducers } from "redux";
import { TodoList } from "./TodoList/TodoReducer";
import { FakeStore } from "./Fakestore/FakeStoreReducer";

export const rootReducer = combineReducers({
  TodoList,
  FakeStore,
});
