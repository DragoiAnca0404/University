import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordHidded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changePasswordVisibility(): void {
    this.isPasswordHidded = !this.isPasswordHidded;
  }

}
