import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import carsReducer from "./cars";
import brandsReducer from "./brands";
import projectsReducer from "./projects";
import usersReducer from "./users";

export default combineReducers({
  cars: carsReducer,
  brands: brandsReducer,
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});
