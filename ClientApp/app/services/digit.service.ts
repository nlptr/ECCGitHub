import { Injectable } from '@angular/core';
//import Rxjs Extensions
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import App Models
import { IDigit } from './../models/digit';

@Injectable()
export class DigitDataService {
   
    getDigit1Data(): Observable<any> {
        let digit1Data: IDigit[] = [
            { value: 0, text: 'Black' },
            { value: 1, text: 'Brown' },
            { value: 2, text: 'Red' },
            { value: 3, text: 'Orange' },
            { value: 4, text: 'Yellow' },
            { value: 5, text: 'Green' },
            { value: 6, text: 'Blue' },
            { value: 7, text: 'Violet' },
            { value: 8, text: 'Gray' },
            { value: 9, text: 'White' },
        ];
        return Observable.of(digit1Data);
    }
}