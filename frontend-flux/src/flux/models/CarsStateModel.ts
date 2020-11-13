import { Brand } from "./Brand";
import { Car } from "./Car";

export class CarsStateModel {
    carsList: Car[];
    brandsList: Brand[];
    isCarsLoading: boolean;
    isBrandsLoading: boolean;
    constructor() {
        this.carsList = [];
        this.brandsList = [];
        this.isCarsLoading = false;
        this.isBrandsLoading = false;
    }
}