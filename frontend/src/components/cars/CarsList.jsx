import React, { Component } from "react";
import { loadCars, getAllcars } from "../../store/allcarstore/cars";
import { loadbrands, getAllbrands } from "../../store/brandstore/brands";
import { connect } from "react-redux";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import Carstable from "../cars/Carstable";
import _ from "lodash";

class CarsList extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "name", order: "asc" },
  };

  componentDidMount() {
    this.props.loadCars();
    this.props.loadbrands();
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
    const { pageSize, currentPage, selectedBrand, sortColumn } = this.state;
    const { brands, cars } = this.props;

    const filtered =
      selectedBrand && selectedBrand.id
        ? cars.filter((m) => m.brand.id === selectedBrand.id)
        : cars;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const carsModfied = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: carsModfied };
  };

  render() {
    const { length: count } = this.props.cars;
    const { pageSize, currentPage, sortColumn } = this.state;
    const allBrands = [{ _id: "", name: "All Brands" }, ...this.props.brands];
    if (count === 0) return <p>There are no Cars to show</p>;

    const { totalCount, data: cars } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={allBrands}
            selectedItem={this.state.selectedBrand}
            onItemSelect={this.handleBrandSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} Cars</p>
          <Carstable
            cars={cars}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: getAllcars(state),
  brands: getAllbrands(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCars: () => dispatch(loadCars()),
  loadbrands: () => dispatch(loadbrands()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
