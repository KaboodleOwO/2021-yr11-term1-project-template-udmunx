import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-licence',
  templateUrl: './add-licence.component.html',
  styleUrls: ['./add-licence.component.css'],
})
export class AddLicenceComponent implements OnInit {

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  getErrorMessage1() {
    if (this.firstName.hasError('required')) {
      return 'You must enter a first name';
    }
  }

  getErrorMessage2() {
    if (this.firstName.hasError('required')) {
      return 'You must enter a last name';
    }
  }

  getErrorMessage3() {
    if (this.email.hasError('required')) {
      return 'You must enter a vaild licence address';
    }
    return this.email.hasError('email') ? 'Not a valid licence number' : '';
  }

  constructor() {}

  ngOnInit() {}
}
