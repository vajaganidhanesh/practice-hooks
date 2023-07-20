import { FETCH_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Constants";

export const handleFakeStoreData = () => {
  return {
    type: FETCH_PRODUCT,
  };
};

export const handleDeleteFakeStoreData = () => {
  return {
    type: DELETE_PRODUCT,
  };
};

export const handleUpdateFakeStoreData = () => {
  return {
    type: UPDATE_PRODUCT,
  };
};
