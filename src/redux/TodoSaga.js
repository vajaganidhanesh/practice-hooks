import { takeEvery } from "redux-saga/effects";

function* getData() {
  let response = yield fetch("https://fakestoreapi.com/products");
  let data = yield response.json();
  yield console.log(data);
  yield console.log("its todoList Saga");
}

function* getProducts() {
  yield takeEvery("Fetch_Data", getData);
}

export default getProducts;
