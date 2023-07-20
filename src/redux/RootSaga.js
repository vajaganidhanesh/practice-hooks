import { all } from "redux-saga/effects";

import FakeStoreProducts from "./Fakestore/FakeStoreSaga";
import getProducts from "./TodoList/TodoSaga";

function* rootSaga() {
  yield all([FakeStoreProducts(), getProducts()]);
}

export default rootSaga;
