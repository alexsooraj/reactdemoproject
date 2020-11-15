import { combineReducers } from "redux";
import carsReducer from "../allcarstore/cars";
import carReducer from "../carstore/car";
import brandsReducer from "../brandstore/brands";

export default combineReducers({
  cars: carsReducer,
  brands: brandsReducer,
  car: carReducer,
});
