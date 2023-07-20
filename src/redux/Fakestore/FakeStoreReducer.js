import { FETCH_PRODUCT_SAGA } from "./Constants";
const initialState = {
  products: [],
};

export const FakeStore = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SAGA:
      console.log(action.payload);
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };

    default:
      return state;
  }
};