import { Container } from "flux/utils";
import CarsStore from "../stores/cars/CarsStore";
import Cars from '../../ui/cars/Cars';

function getStores() {
    return [CarsStore];
}

function getState() {
    return {
        carsState: CarsStore.getState(),
    };
}

export default Container.createFunctional(Cars, getStores, getState);
