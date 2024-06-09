import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showLoginButton: boolean = false;

  constructor () {}

  toggleButtons() {
    this.showLoginButton = !this.showLoginButton;
  }
  
}
