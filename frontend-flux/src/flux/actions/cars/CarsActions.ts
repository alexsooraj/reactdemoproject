import AppDispatcher from "../../dispatcher/AppDispatcher";
import { Brand } from "../../models/Brand";
import { Car } from "../../models/Car";
import { CarsActionsTypes } from "./CarsActionTypes";

export default class CarsActions {
    static loadCars() {
        AppDispatcher.dispatch({
            type: CarsActionsTypes.LOAD_CARS
        });
    }
    static loadCarsComplete(cars: Car[]) {
        AppDispatcher.dispatch({
            type: CarsActionsTypes.LOAD_CARS_COMPLETE,
            payload: cars
        });
    }
    static loadBrands() {
        AppDispatcher.dispatch({
            type: CarsActionsTypes.LOAD_BRANDS
        });
    }
    static loadBrandsComplete(brands: Brand[]) {
        AppDispatcher.dispatch({
            type: CarsActionsTypes.LOAD_BRANDS_COMPLETE,
            payload: brands
        });
    }
}
