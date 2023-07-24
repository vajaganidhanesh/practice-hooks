import { DELETE_PRODUCT, FETCH_PRODUCT_SAGA } from "./Constants";
const initialState = {
  products: [],
  loading: true,
};

export const FakeStore = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SAGA:
      return {
        ...state,
        products: [...state.products, ...action.payload],
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: state.products.filter((prod) => prod.id !== action.payload),
      };
    default:
      return state;
  }
};
