import React from "react";
import "./Cars.css";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import DashboardCharts from "./DashboardCharts";

const store = configureStore();

function DashBoard() {
  return (
    <Provider store={store}>
      <DashboardCharts />
    </Provider>
  );
}

export default DashBoard;
