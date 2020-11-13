import React, { useEffect } from "react";
import "./Cars.css";
import CarsList from "../cars-list/CarsList";

function Cars(props) {
  return (
    <div>
      <CarsList {...props} />
    </div>
  );
}

export default Cars;
