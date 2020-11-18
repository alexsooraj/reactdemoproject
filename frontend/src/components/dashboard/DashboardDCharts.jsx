import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars, getAllcars } from "../../store/allcarstore/cars";
import PieChart from "./piechart";

function DashboardDCharts(props) {
  const dispatch = useDispatch();
  const cars = useSelector(getAllcars);

  const data = [
    {
      label: "Apple",
      value: 30,
    },
    {
      label: "Cherry",
      value: 60,
    },
    {
      label: "Pumpkin",
      value: 10,
    },
  ];

  useEffect(() => {
    dispatch(loadCars());
  }, []);
  return (
    <div className="row">
      <div className="col-sm-5">
        <PieChart
          height={300}
          width={500}
          data={data}
          outerRadius={70}
          innerRadius={110}
        />
      </div>
    </div>
  );
}

export default DashboardDCharts;
