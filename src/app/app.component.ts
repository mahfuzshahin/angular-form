import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-form';
  defaultCountry = 'bangladesh';
  firstname: string | undefined;
  lastname: string | undefined;
  defaultGender = 'Male';

  gender:
    | [
        { id: 1; value: 'Male' },
        { id: 2; value: 'Female' },
        { id: 3; value: 'Other' }
      ]
    | undefined;
  @ViewChild('myForm') form: NgForm | undefined;

  onSubmit() {
    console.log(this.form);
  }
  setDefaultValues() {
    //this.form.value.perspnalDetails.firstname = 'JOhn';
    // this.form?.setValue({
    //   country: '',
    //   gender: '',
    //   hibbies: '',
    //   personalDetails: {
    //     firstname: 'vc',
    //     lastname: 'c',
    //     email: '',
    //   },
    // });
    this.form?.form.patchValue({
      personalDetails: {},
    });
  }
}
