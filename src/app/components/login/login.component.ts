import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  onSubmit(form: any): void {
    console.log('Login Form Data:', form.value);
  }

}
