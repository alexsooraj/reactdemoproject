import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCar } from "../../store/carstore/car";
class CarDetails extends Component {
  componentDidMount() {
    this.props.loadCar(this.props.match.params.id);
  }

  render() {
    const { car } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" id="name" value={car.name} />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            className="form-control"
            id="brand"
            value={car.brand ? car.brand.name : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="horsepower">Horsepower</label>
          <input
            className="form-control"
            id="horsepower"
            value={car.Horsepower}
          />
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input className="form-control" id="origin" value={car.Origin} />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  car: state.entities.car.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadCar: (id) => dispatch(loadCar(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);
