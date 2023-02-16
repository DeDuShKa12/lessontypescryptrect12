import {FC, useEffect, useState} from 'react';

import {ICar} from "../../interfaces";
import {Car} from "../Car/Car";
import {carService} from "../../services";

const Cars:FC = () => {

    let [cars, setCars] = useState<ICar[]>([]);

    useEffect(()=>{
        carService.getAll().then(({data}) =>setCars(data))
    },[])

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};