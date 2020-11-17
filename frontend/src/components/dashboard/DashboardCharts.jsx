import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCars, getAllcars } from "../../store/allcarstore/cars";
import Chart from "react-apexcharts";

function DashboardCharts(props) {
  const getHpPieData = (carsList) => {
    return {
      options: {
        labels: carsList.map((car) => car.name),
        legend: { show: false },
        title: { text: "Performance Comparison (HP)" },
        chart: {
          events: {
            dataPointSelection: function (event, chartContext, config) {
              props.history.push("/cars/" + config.selectedDataPoints[0]);
            },
          },
        },
      },
      series: carsList.map((car) => car.horsepower),
    };
  };
  const getDisplacementChartData = (carsList) => {
    return {
      options: {
        xaxis: { categories: carsList.map((car) => car.name) },
        legend: { show: false },
        title: { text: "Displacement" },
        chart: {
          events: {
            dataPointSelection: function (event, chartContext, config) {
              props.history.push("/cars/" + config.selectedDataPoints[0]);
            },
          },
        },
      },
      series: [
        {
          name: "Displacement",
          data: carsList.map((car) => car.displacement),
        },
      ],
    };
  };
  const dispatch = useDispatch();
  const cars = useSelector(getAllcars);

  const hpPie = getHpPieData(cars);
  const disBar = getDisplacementChartData(cars);

  useEffect(() => {
    dispatch(loadCars(disBar));
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
