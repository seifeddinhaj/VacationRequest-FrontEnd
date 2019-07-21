import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpUser = {
    name: '',
    nickname: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(private router:Router,private authservice :AuthService) { }

  ngOnInit() {
  }
  Registre(n,nk,em,pas,passc){
    this.signUpUser.name=n;
    this.signUpUser.nickname=nk;
    this.signUpUser.email=em;
    this.signUpUser.password=pas;
    this.signUpUser.passwordConfirmation=passc;
    this.authservice.registerUser(this.signUpUser)
  this.router.navigateByUrl('/')
  }
}
