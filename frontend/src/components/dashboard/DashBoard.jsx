import React from "react";
import "../cars/Cars.css";
import DashboardCharts from "./DashboardCharts";

function DashBoard(props) {
  return <DashboardCharts {...props} />;
}

export default DashBoard;
