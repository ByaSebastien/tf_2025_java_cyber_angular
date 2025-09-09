import {Component, inject} from '@angular/core';
import {MeetingType} from './enums/metting-type';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomValidators} from './validators/CustomValidators';
import {FormError} from './form-error/form-error';
import {KeyValuePipe} from '@angular/common';
import {ContactForm} from './models/contact.form';

@Component({
  selector: 'app-exo4',
  imports: [
    ReactiveFormsModule,
    FormError,
    KeyValuePipe
  ],
  templateUrl: './exo4.html',
  styleUrl: './exo4.scss'
})
export class Exo4 {

  private readonly _fb: FormBuilder = inject(FormBuilder);

  MeetingType = MeetingType;

  availabilities = this._fb.array([
                                     new FormControl(
                                     null,
                                     Validators.compose([Validators.required, CustomValidators.afterOneWeek])
                                   )]);

  basicForm = this._fb.group({
                              firstname: [null, [Validators.required, Validators.maxLength(50)]],
                              lastname: [null, [Validators.required, Validators.maxLength(50)]],
                              email: [null, [Validators.required, Validators.email]],
                              meetingType: [null, [Validators.required]],
                              description: [null, [Validators.required]],
                              availabilities: this.availabilities,
                              atHome: [false, [Validators.required]],
                            });

  addressForm = this._fb.group({
    street: [null, [Validators.required]],
    city: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
  });

  contactForm = this._fb.group({
    contact: this.basicForm,
    address: this.addressForm,
  });

  constructor(
  ) {
    this.addressForm.disable();
  }

  addAvailability() {
    if (this.availabilities.length >= 5) {
      return;
    }
    this.availabilities.push(new FormControl(null, Validators.compose([ Validators.required, CustomValidators.afterOneWeek])));
  }

  removeAvailability(index: number) {
    if (this.availabilities.length <= 1) {
      return;
    }
    this.availabilities.removeAt(index);
  }

  submit() {
    this.contactForm.markAllAsTouched();
    if (!this.contactForm.valid) {
      console.log("Non valid")
    } else {
      console.log("Valid")
      let formValue: ContactForm = this.contactForm.value as unknown as ContactForm;
      console.log(formValue);
    }
  }

  toggleAddressForm(){
    if(this.addressForm.enabled){
      this.addressForm.disable();
      this.addressForm.reset();
    }else{
      this.addressForm.enable();
    }
  }
}
