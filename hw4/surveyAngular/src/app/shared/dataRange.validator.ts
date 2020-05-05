import { FormControl, AbstractControl } from '@angular/forms';

export class DataRange{
    static dataRangeCheckFailed(control: AbstractControl) {
        let inputData: string = control.value;
        let tokens: string[] = inputData.split(',');
        if(tokens.length<10){
            return {dataRangeCheckFailed : true};
        }
        const ifNumberWrong = tokens.some((item) => Number(item) < 1 || Number(item) > 100);
        if (ifNumberWrong) {
            return {dataRangeCheckFailed : true};
        }
        return null;     
    }
}