import { SET_QUERY_PRICE, SET_QUERY_ROOMS, SET_LAT_LNG } from "../types";

export const queryByPrice = (min, max) => (dispatch) => {
  dispatch({ type: SET_QUERY_PRICE, payload: [min, max] });
};

export const setLocation = (lat, lng) => (dispatch) => {
  dispatch({ type: SET_LAT_LNG, payload: { lat, lng } });
};

export const queryByRoom = (num) => (dispatch) => {
  dispatch({ type: SET_QUERY_ROOMS, payload: num });
};
