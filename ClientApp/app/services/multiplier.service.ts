import { Injectable } from '@angular/core';
//import Rxjs Extensions
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import App Models
import { IMultiplier } from './../models/multiplier';

@Injectable()
export class MultiplierService {

    getMultiplierData(): Observable<any> {
        let multiplierData: IMultiplier[] = [
            { type: 'x', valueDisplay: '1',  value:1, text: 'Black' },
            { type: 'x', valueDisplay: '10', value: 10,  text: 'Brown' },
            { type: 'x', valueDisplay: '100',value: 100,  text: 'Red' },
            { type: 'x', valueDisplay: '1K', value: 1000, text: 'Orange' },
            { type: 'x', valueDisplay: '10K',value: 10000,  text: 'Yellow' },
            { type: 'x', valueDisplay: '100K',value: 100000,  text: 'Green' },
            { type: 'x', valueDisplay: '1M', value: 1000000,  text: 'Blue' },
            { type: 'x', valueDisplay: '10M', value: 10000000,  text: 'Violet' },
            { type: 'x', valueDisplay: '100M', value: 100000000,  text: 'Gray' },
            { type: 'x', valueDisplay: '1G', value: 1, text: 'White' },
            { type: '÷', valueDisplay: '10', value: 10,  text: 'Gold' },
            { type: '÷', valueDisplay: '100', value: 100,  text: 'Silver' },
        ];
        return Observable.of(multiplierData);
    }
}