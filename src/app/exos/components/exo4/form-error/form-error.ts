import {Component, input} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form-error',
  imports: [],
  templateUrl: './form-error.html',
  styleUrl: './form-error.scss'
})
export class FormError {

  control = input.required<AbstractControl>();

  get errors(): ValidationErrors | null | undefined {
    return this.control().errors;
  }
}
