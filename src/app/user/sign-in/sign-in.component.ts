import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, AuthData } from 'angular2-token';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  login(em,pass){
this.signInUser.email=em;
this.signInUser.password=pass;
    this.authservice.logInUser(this.signInUser)
  }

}
