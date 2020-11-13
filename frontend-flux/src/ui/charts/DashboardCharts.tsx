import React, { useEffect } from "react";
import CarsActions from "../../flux/actions/cars/CarsActions";
import Chart from "react-apexcharts";

function DashboardCharts(props) {
    console.log('DashboardCharts props', props);
    useEffect(() => {
        CarsActions.loadCars();
    }, []);

    const getHpPieData = (carsList) => {
        return {
            options: {
                labels: carsList.map(car => car.name),
                legend: { show: false },
                title: { text: 'Performance Comparison (HP)' }
            },
            series: carsList.map(car => car.horsepower)
        }
    }
    const getDisplacementChartData = (carsList) => {
        return {
            options: {
                xaxis: { categories: carsList.map(car => car.name) },
                legend: { show: false },
                title: { text: 'Displacement' }
            },
            series: [
                {
                    name: 'Displacement',
                    data: carsList.map(car => car.displacement)
                }
            ]
        }
    }

    const cars = props.carsList;

    console.log('cars', cars);

    const hpPie = getHpPieData(cars);
    const disBar = getDisplacementChartData(cars);

    return <div>
        <div className="row">
            <div className="col-sm-5">
                <Chart options={hpPie.options} series={hpPie.series} type="pie" />
            </div>
            <div className="col-sm-7">
                <Chart options={disBar.options} series={disBar.series} type="bar" />
            </div>
        </div>
    </div>
}

export default DashboardCharts;