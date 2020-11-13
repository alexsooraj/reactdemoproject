import React, { Component, useEffect } from "react";
import CarsActions from "../../flux/actions/cars/CarsActions";
import { paginate } from "../../utils/Paginate";
import _ from "lodash";

class CarsList extends Component {
    state = {
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: "name", order: "asc" },
    };

    componentDidMount() {
        CarsActions.loadCars();
        CarsActions.loadBrands();
    }


    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    handleBrandSelect = (brand) => {
        this.setState({ selectedBrand: brand, currentPage: 1 });
    };

    getPagedData = () => {
        const { pageSize, currentPage, selectedBrand, sortColumn } = this.state as any;
        const { brands, cars } = this.props as any;

        const filtered =
            selectedBrand && selectedBrand.id
                ? cars.filter((m) => m.brand.id === selectedBrand.id)
                : cars;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const carsModfied = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: carsModfied };
    };


    render() {
        return <div>
            Cars List
        </div>;
    }
}

export default CarsList;
