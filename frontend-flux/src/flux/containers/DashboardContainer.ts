import { Container } from "flux/utils";
import DashBoard from "../../ui/dashboard/DashBoard";
import CarsStore from "../stores/cars/CarsStore";

function getStores() {
    return [CarsStore];
}

function getState() {
    return {
        carsState: CarsStore.getState(),
    };
}

export default Container.createFunctional(DashBoard, getStores, getState);
