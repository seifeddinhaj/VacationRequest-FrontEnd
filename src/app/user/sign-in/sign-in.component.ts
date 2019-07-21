import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

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
  constructor(private tokenAuthSerivce:Angular2TokenService) { }

  ngOnInit() {
  }
  login(em,pass){
this.signInUser.email=em;
this.signInUser.password=pass;
    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(

        res => {
          if(res.status == 200){
            alert("Sign In with succes")
          }
        },

        err => {
          console.log('err:', err);
         alert("Email or password is wrong !")
        }
    )

  }

}
