import { Injectable } from '@angular/core';

//import App Models
import { IDigit } from './../../models/digit';
import { IMultiplier } from './../../models/multiplier';
import { IComputedValue } from './../../models/computedvalue';

// import App Services
import { DigitDataService } from './../../services/digit.service';
import { MultiplierService } from './../../services/multiplier.service';
import { ToleranceService } from './../../services/tolerance.service';

@Injectable()
export class ResistanceCalculator {
    constructor(
        private digitSvc: DigitDataService,
        private multiplerSvc: MultiplierService,
        private toleranceSvc: ToleranceService
        
    ) { }
    //implement interface
    calculateOhmValue(bandAColor: string, bandBColor: string, bandCColor: string, bandDColor: string): number {
        var bandAValue:number = 1;
        let bandBValue:number = 0;
        let bandCValue:number = 1;
        let bandCType:string = 'x';
        this.digitSvc.getDigit1Data()
            .subscribe(
            (d1: IDigit[]) => {
                let d1Value = d1.find(d => d.text === bandAColor)
                if (d1Value)
                    bandAValue = d1Value.value;
            });
        this.digitSvc.getDigit1Data()
            .subscribe(
            (d2: IDigit[]) => {
                let d2Value = d2.find(d => d.text === bandBColor)
                if (d2Value)
                    bandBValue = d2Value.value;
            });
        this.multiplerSvc.getMultiplierData()
            .subscribe(
            (mul: IMultiplier[]) => {
                let mValue = mul.find(m => m.text === bandCColor)
                if (mValue) {
                    bandCValue = mValue.value;
                    bandCType = mValue.type
                }
            });
        let concatenatedstring = bandAValue.toString() + bandBValue.toString();
        if (bandCType === 'x') {
            return parseFloat(concatenatedstring) * bandCValue;
        }
            
        if (bandCType === '÷')
            return parseFloat(concatenatedstring) / bandCValue;
        else return 0;
    }

    // Another way - passing full dropdown object and calculating min/max resistance
    calculateResistance(ddDigit1: IDigit, ddDigit2: IDigit, ddtolerance: IMultiplier, ddmultiplier: IMultiplier): IComputedValue {
        let computedvalue = <IComputedValue>{};
        
        let computedresistance = this.calculateOhmValue(ddDigit1.text, ddDigit2.text, ddmultiplier.text, ddtolerance.text);
        computedvalue.resistance = computedresistance.toFixed(2);
        computedvalue.toleranceDisplay = ddtolerance.type + ddtolerance.valueDisplay;
        let min = computedresistance * (1 - (ddtolerance.value / 100));
        let max = computedresistance * (1 + (ddtolerance.value / 100));
        computedvalue.minimum = min.toFixed(6);
        computedvalue.maximum = max.toFixed(6);
               
        return computedvalue;

    }
}