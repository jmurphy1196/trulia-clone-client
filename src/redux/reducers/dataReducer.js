import listingData from "../../util/listingData";
import { SET_LAT_LNG, SET_QUERY_ROOMS, SET_QUERY_PRICE } from "../types";

const initialState = {
  houses: [...listingData.listingData],
  results: [...listingData.listingData],
  query: null,
  lat: null,
  lng: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LAT_LNG:
      return {
        ...state,
        ...action.payload,
      };
    case SET_QUERY_ROOMS:
      let num = action.payload;
      let newResults = state.results.filter(
        (house) => house.property.bedrooms >= num
      );
      return {
        ...state,
        results: newResults,
      };
    case SET_QUERY_PRICE:
      let min = action.payload[0];
      let max = action.payload[1];
      console.log(`${min}, ${max}`);
      console.log(state.houses);
      let priceResults = state.houses.filter((house) => house.listPrice >= min);
      let maxpriceResults = priceResults.filter(
        (house) => house.listPrice <= max
      );
      console.log(priceResults);
      return {
        ...state,
        results: maxpriceResults,
      };
    default:
      return state;
  }
}
