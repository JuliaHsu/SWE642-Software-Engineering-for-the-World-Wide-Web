import { FormArray } from '@angular/forms';

export class HearFromValidators {
  static multipleCheckboxRequireTwo(fa: FormArray) {
    let valid = false;
    let count = 0
    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        count += 1
      }
    }
    console.log(count);
    return count > 1 ? null : {
      multipleCheckboxRequireTwo: true
    };
  }
}