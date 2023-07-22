import { FETCH_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Constants";

export const handleFakeStoreData = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

export const handleDeleteFakeStoreData = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const handleUpdateFakeStoreData = () => {
  return {
    type: UPDATE_PRODUCT,
  };
};
