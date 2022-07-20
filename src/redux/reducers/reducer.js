import {
  GET_CATEGORY,
  GET_FILTER,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  LOADING_FALSE,
  LOADING_TRUE,
  SEARCH,
} from "../actionTpes/actionTypes";

const initialState = {
  loading: false,
  products: [],
  numberOfPages: 1,
  singleProduct: {},
  allCategories: [],
  filteredproduct: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload.products,
        numberOfPages: payload.count,
        loading: false,
      };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: payload,
        loading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,
        allCategories: payload,
        loading: false,
      };
    case GET_FILTER:
      return {
        ...state,
        filteredproduct: payload,
        loading: false,
      };
    case SEARCH:
      return {
        ...state,
        products: payload,
        loading: false,
      };

    default:
      return state;
  }
};
