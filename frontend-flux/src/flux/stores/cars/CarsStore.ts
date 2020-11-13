import { ReduceStore } from "flux/utils";
import { APIEndpoints } from "../../../common/APIEndpoints";
import { APIUtil } from "../../../utils/APIUtil";
import CarsActions from "../../actions/cars/CarsActions";
import { CarsActionsTypes } from "../../actions/cars/CarsActionTypes";
import AppDispatcher from "../../dispatcher/AppDispatcher";
import { Action } from "../../models/Action";
import { CarsStateModel } from "../../models/CarsStateModel";

class CarsStore extends ReduceStore<CarsStateModel, Action> {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState(): CarsStateModel {
        return new CarsStateModel();
    }

    reduce(state: CarsStateModel, action: Action) {
        switch (action.type) {
            case CarsActionsTypes.LOAD_CARS: {
                this.loadCars();
                return {
                    ...state,
                    isCarsLoading: true
                };
            }
            case CarsActionsTypes.LOAD_CARS_COMPLETE: {
                return {
                    ...state,
                    carsList: action.payload,
                    isCarsLoading: false
                };
            }
            case CarsActionsTypes.LOAD_BRANDS: {
                this.loadBrands();
                return {
                    ...state,
                    isBrandsLoading: true
                }
            }
            case CarsActionsTypes.LOAD_BRANDS_COMPLETE: {
                return {
                    ...state,
                    brandsList: action.payload,
                    isBrandsLoading: false
                }
            }
            default: return state;
        }
    }

    private loadCars() {
        APIUtil.get(APIEndpoints.CARS).then(cars => {
            console.log('cars', cars);
            CarsActions.loadCarsComplete(cars);
        });
    }

    private loadBrands() {
        APIUtil.get(APIEndpoints.BRANDS).then(brands => {
            console.log('brands', brands);
            CarsActions.loadBrandsComplete(brands);
        });
    }
}

export default new CarsStore();