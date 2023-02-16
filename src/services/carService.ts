import {apiService, IRes} from './apiService';
import {ICar} from '../interfaces';
import {urls} from '../config';

const carService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.cars)
}


export {
    carService
}