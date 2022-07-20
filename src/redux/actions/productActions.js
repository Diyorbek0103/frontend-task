import { main_url } from "../../main_url";
import {
  GET_CATEGORY,
  GET_FILTER,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  LOADING_FALSE,
  LOADING_TRUE,
} from "../actionTpes/actionTypes";
import axios from "axios";

export const getProducts = (page) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    const res = await axios.get(
      `${main_url}/api/product?name=&category=&limit=3&offset=${page * 3 - 3}`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOADING_FALSE,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    const res = await axios.get(`${main_url}/api/product/${id}`);
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOADING_FALSE,
    });
  }
};

export const getCategory = () => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    const res = await axios.get(`${main_url}/api/category`);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOADING_FALSE,
    });
  }
};

export const getFilter = (mycategory) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    const res = await axios.get(
      `${main_url}/api/product?category=${mycategory}&limit=3`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOADING_FALSE,
    });
  }
};

export const search = (name) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    const res = await axios.get(
      `${main_url}/api/product?name=${name}&limit=3`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOADING_FALSE,
    });
  }
};
