import React from "react";
import "./Cars.css";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import CarsList from "./CarsList";

const store = configureStore();

function DashBoard() {
  return (
    <Provider store={store}>
      <CarsList />
    </Provider>
  );
}

export default DashBoard;
