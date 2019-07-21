import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

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

  constructor(private tokenAuthSerivce:Angular2TokenService) { }

  ngOnInit() {
  }
  Registre(n,nk,em,pas,passc){
    this.signUpUser.name=n;
    this.signUpUser.nickname=nk;
    this.signUpUser.email=em;
    this.signUpUser.password=pas;
    this.signUpUser.passwordConfirmation=passc;
    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(

      (res) => {

        if (res.status == 200){
          alert("accout created with succes")
        }

      },

      (err) => {
        console.log(err.json())
      
      }
  )

  }
}
