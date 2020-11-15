import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../apistore/api";
import moment from "moment";

const slice = createSlice({
  name: "car",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    carRequested: (car, action) => {
      car.loading = true;
    },

    carReceived: (car, action) => {
      car.list = action.payload;
      car.loading = false;
      car.lastFetch = Date.now();
    },

    carRequestFailed: (car, action) => {
      car.loading = false;
    },
  },
});

export const { carReceived, carRequested, carRequestFailed } = slice.actions;
export default slice.reducer;

// Action Creators

export const loadCar = (id) => (dispatch, getState) => {
  let url = "/cars/";
  url = url + id;
  return dispatch(
    apiCallBegan({
      url,
      onStart: carRequested.type,
      onSuccess: carReceived.type,
      onError: carRequestFailed.type,
    })
  );
};
