import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

//import App Models
import { IDigit } from './../../models/digit';
import { IMultiplier } from './../../models/multiplier';
import { IComputedValue } from './../../models/computedvalue';

// import App Services
import { DigitDataService } from './../../services/digit.service';
import { MultiplierService } from './../../services/multiplier.service';
import { ToleranceService } from './../../services/tolerance.service';
import { ResistanceCalculator } from './resistance-calculator';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(
        private digitSvc: DigitDataService,
        private multiplerSvc: MultiplierService,
        private toleranceSvc: ToleranceService,
        private resistanceCalc: ResistanceCalculator
    ) { }
    ddDigit1: IDigit | undefined;
    ddDigit2: IDigit | undefined;
    ddmultiplier: IMultiplier | undefined;
    ddtolerance: IMultiplier | undefined;

    digit1Data: IDigit[] = [];
    digit2Data: IDigit[] = [];
    multiplierData: IMultiplier[] = [];
    toleranceData: IMultiplier[] = []; 
    computedvalue = <IComputedValue>{};   
    
    ngOnInit(): void {
        this.populateDropDowns();
        this.getComputedValues();
    }
    populateDropDowns() {

        this.digitSvc.getDigit1Data()
            .subscribe(
            (data: any) => {
                let digitsData: IDigit[] = data;
                // Digit 1
                this.digit1Data = digitsData.filter(d => d.value > 0);
                this.ddDigit1 = this.digit1Data.find(d => d.value === 1);
                //Digit 2
                this.digit2Data = data;
                this.ddDigit2 = this.digit2Data.find(d => d.value === 0);
               
            });
        //Multiplier
        this.multiplerSvc.getMultiplierData()
            .subscribe(
            data => {
                this.multiplierData = data;
                this.ddmultiplier = this.multiplierData.find(m => m.value === 1);
            });
        //Tolerance
        this.toleranceSvc.getToleranceData()
            .subscribe(
            data => {
                this.toleranceData = data;
                this.ddtolerance = this.toleranceData.find(t => t.value === 1);
            });
    }
       
    onddDigit1Changed() {
        this.getComputedValues();
    }
    onddDigit2Changed() {
        this.getComputedValues();
    }
    onddMultiplierChanged() {
        this.getComputedValues();
    }
    onddToleranceChanged() {
        this.getComputedValues();
    }
    getComputedValues() {
        if (this.ddDigit1 && this.ddDigit2 && this.ddtolerance && this.ddmultiplier) {
            this.computedvalue = this.resistanceCalc.calculateResistance(this.ddDigit1, this.ddDigit2, this.ddtolerance, this.ddmultiplier);
        }
    }
    getOptionColor(text: string): string {
        return text.toLowerCase();
    }
    getDDColor(dropdown: any): string {
        return dropdown.text.toLowerCase();
        
    }
}
