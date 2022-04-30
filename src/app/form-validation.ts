import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ValidatePhoneInput(validateRex: RegExp) {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const str = control.value;
    return validateRex.test(str) ? null :
      {'numberInvalid': {value: control.value}};
  }
}
