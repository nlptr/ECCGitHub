import { Injectable } from '@angular/core';
//import Rxjs Extensions
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import App Models
import { IMultiplier } from './../models/multiplier';

@Injectable()
export class ToleranceService {

    getToleranceData(): Observable<any> {
        let toleranceData: IMultiplier[] = [
            { type: '±', valueDisplay: '1%', value: 1, text: 'Brown' },
            { type: '±', valueDisplay: '2%', value: 2, text: 'Red' },
            { type: '±', valueDisplay: '3%', value: 3, text: 'Orange' },
            { type: '±', valueDisplay: '4%', value: 4, text: 'Yellow' },
            { type: '±', valueDisplay: '0.5%', value: 0.5, text: 'Green' },
            { type: '±', valueDisplay: '0.25%', value: 0.25, text: 'Blue' },
            { type: '±', valueDisplay: '0.10%', value: 0.10, text: 'Violet' },
            { type: '±', valueDisplay: '0.05%', value: 0.05, text: 'Gray' },
            { type: '±', valueDisplay: '5%', value: 5, text: 'White' },
            { type: '±', valueDisplay: '10%', value: 10, text: 'Gold' },
            
        ];
        return Observable.of(toleranceData);
    }
}