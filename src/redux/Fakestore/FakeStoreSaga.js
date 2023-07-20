import { put, takeEvery } from "redux-saga/effects";
import { FETCH_PRODUCT, FETCH_PRODUCT_SAGA } from "./Constants";

function* FakeStoreData() {
  let response = yield fetch("https://fakestoreapi.com/products");
  let data = yield response.json();
  yield put({
    type: FETCH_PRODUCT_SAGA,
    payload: data,
  });
}

function* FakeStoreProducts() {
  yield takeEvery(FETCH_PRODUCT, FakeStoreData);
}

export default FakeStoreProducts;
