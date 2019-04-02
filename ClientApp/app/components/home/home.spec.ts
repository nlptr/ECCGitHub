import 'jasmine'
import { ResistanceCalculator } from './resistance-calculator'
//import App Models
import { IDigit } from './../../models/digit';
import { IMultiplier } from './../../models/multiplier';
import { IComputedValue } from './../../models/computedvalue';

// import App Services
import { DigitDataService } from './../../services/digit.service';
import { MultiplierService } from './../../services/multiplier.service';
import { ToleranceService } from './../../services/tolerance.service';

describe('calculateresistance', () => {
    let resistanceCalculator: ResistanceCalculator;
    let digitSvc: DigitDataService;
    let multiplierSvc: MultiplierService;
    let toleranceSvc: ToleranceService;
    let computedValue = <IComputedValue>{};
    let ddDigit1 = <IDigit>{};
    let ddDigit2 = <IDigit>{};
    let ddmultiplier = <IMultiplier>{};
    let ddtolerance = <IMultiplier>{};
    beforeEach(() => {
        digitSvc = new DigitDataService();
        multiplierSvc = new MultiplierService();
        toleranceSvc = new ToleranceService();
        resistanceCalculator = new ResistanceCalculator(digitSvc, multiplierSvc, toleranceSvc);
    });
      
    
    it('ohmvalue-when-bandAisBrown-bandBisBlack-bandCisBlack', () => {
        expect(resistanceCalculator.calculateOhmValue('Brown', 'Black', 'Black', 'Brown')).toEqual(10);
    })
})