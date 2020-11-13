import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "brands",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    brandsRequested: (brands, action) => {
      brands.loading = true;
    },

    brandsReceived: (brands, action) => {
      brands.list = action.payload;
      brands.loading = false;
      brands.lastFetch = Date.now();
    },

    brandsRequestFailed: (brands, action) => {
      brands.loading = false;
    },
  },
});

export const {
  brandsReceived,
  brandsRequested,
  brandsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/brands";

export const loadbrands = () => (dispatch, getState) => {
  // const { lastFetch } = getState().entities.brands;

  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;
  return dispatch(
    apiCallBegan({
      url,
      onStart: brandsRequested.type,
      onSuccess: brandsReceived.type,
      onError: brandsRequestFailed.type,
    })
  );
};

// Selector
export const getAllbrands = createSelector(
  (state) => state.entities.brands,
  (brands) => brands.list.filter((brand) => brand)
);
