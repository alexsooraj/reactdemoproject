import React, { useEffect } from "react";
import CarsActions from "../../flux/actions/cars/CarsActions";
import DashboardCharts from "../charts/DashboardCharts";

function DashBoard(props) {
  return (
    <DashboardCharts carsList={props.carsState.carsList} />
  );
}

export default DashBoard;
