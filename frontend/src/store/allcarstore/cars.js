import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../apistore/api";
import moment from "moment";

const slice = createSlice({
  name: "cars",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    carsRequested: (cars, action) => {
      cars.loading = true;
    },

    carsReceived: (cars, action) => {
      cars.list = action.payload;
      cars.loading = false;
      cars.lastFetch = Date.now();
    },

    carsRequestFailed: (cars, action) => {
      cars.loading = false;
    },
  },
});

export const { carsReceived, carsRequested, carsRequestFailed } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/cars";

export const loadCars = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.cars;
  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;
  return dispatch(
    apiCallBegan({
      url,
      onStart: carsRequested.type,
      onSuccess: carsReceived.type,
      onError: carsRequestFailed.type,
    })
  );
};

// Selector
export const getAllcars = createSelector(
  (state) => state.entities.cars,
  (cars) => cars.list.filter((car) => car)
);

export const getCarsByBrand = (Id) =>
  createSelector(
    (state) => state.entities.cars,
    (cars) => cars.list.filter((car) => car)
  );
