import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./RootReducer";
import getProducts from "./TodoList/TodoSaga";

const sagaMiddleWare = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(getProducts);

export default store;
