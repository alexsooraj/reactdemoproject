import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class Carstable extends Component {
  columnns = [
    {
      path: "name",
      label: "Name",
      content: (car) => <Link to={`/cars/${car.id}`}>{car.name}</Link>,
    },
    {
      path: "brand.name",
      label: "Brand",
    },
    {
      path: "Horsepower",
      label: "Horsepower",
    },
    {
      path: "Year",
      label: "Year",
    },
    {
      path: "Origin",
      label: "Origin",
    },
  ];

  render() {
    const { cars, onSort, sortColumn } = this.props;
    return (
      <Table
        data={cars}
        columns={this.columnns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default Carstable;
