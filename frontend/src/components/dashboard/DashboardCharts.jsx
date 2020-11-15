import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars, getAllcars } from "../../store/allcarstore/cars";
import Chart from "react-apexcharts";

function DashboardCharts() {
  const getHpPieData = (carsList) => {
    return {
      options: {
        labels: carsList.map((car) => car.name),
        legend: { show: false },
        title: { text: "Performance Comparison (HP)" },
      },
      series: carsList.map((car) => car.Horsepower),
    };
  };
  const getDisplacementChartData = (carsList) => {
    return {
      options: {
        xaxis: { categories: carsList.map((car) => car.name) },
        legend: { show: false },
        title: { text: "Displacement" },
      },
      series: [
        {
          name: "Displacement",
          data: carsList.map((car) => car.Displacement),
        },
      ],
    };
  };
  const dispatch = useDispatch();
  const cars = useSelector(getAllcars);

  const hpPie = getHpPieData(cars);
  const disBar = getDisplacementChartData(cars);

  useEffect(() => {
    dispatch(loadCars());
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-sm-5">
          <Chart options={hpPie.options} series={hpPie.series} type="pie" />
        </div>
        <div className="col-sm-7">
          <Chart options={disBar.options} series={disBar.series} type="bar" />
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;
