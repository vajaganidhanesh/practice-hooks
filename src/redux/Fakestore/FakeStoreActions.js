import { FETCH_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./Constants";

export const handleFakeStoreData = () => {
  console.log("handleFakeStoreData");
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
