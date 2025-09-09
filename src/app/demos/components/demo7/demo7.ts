import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {KeyValue, KeyValuePipe, NgClass} from '@angular/common';
import {PersonGender} from './models/person';

@Component({
  selector: 'app-demo7',
  imports: [
    ReactiveFormsModule,
    NgClass,
    KeyValuePipe
  ],
  templateUrl: './demo7.html',
  styleUrl: './demo7.scss'
})
export class Demo7 {

  protected readonly PersonGender = PersonGender;

  private readonly _fb: FormBuilder = inject(FormBuilder);

  personForm = this._fb.group({
    lastname: [null, [Validators.required,Validators.maxLength(50)]],
    firstname: [null, [Validators.required, Validators.maxLength(50)]],
    birthdate: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, []],
    siblings: [0, [Validators.required, Validators.min(0)]],
    single: [false, [Validators.required]],
    gender: ["MALE", [Validators.required]],
  });

  constructor() {
  }

  submitForm() {

    console.log(this.personForm.value);

    this.personForm.markAllAsTouched();

    if(this.personForm.invalid) {
      console.log("No valid")
      return;
    }
    console.log("Valid");
  }

  originalOrder = (a: KeyValue<string,PersonGender>, b: KeyValue<string,PersonGender>): number => {
    return 0;
  }
}
