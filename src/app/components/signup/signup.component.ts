import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  onSubmit(form: any): void {
    console.log('Signup Form Data:', form.value);
  }

}
