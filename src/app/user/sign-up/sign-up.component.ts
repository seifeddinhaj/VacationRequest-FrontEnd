import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';
import { delay } from 'q';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpUser = {
    email: '',
    name: '',
    nickname: '',
    
    password: '',
    passwordConfirmation: ''
  };

  constructor(private router:Router,private authservice :AuthService,private tokenauth:Angular2TokenService) { }

  ngOnInit() {
  }
  Registre(em,pas,passc){
    console.log(em +pas +passc)
    /*this.signUpUser.name=n;
    this.signUpUser.nickname=nk;
    this.signUpUser.email=em;
    this.signUpUser.password=pas;
    this.signUpUser.passwordConfirmation=passc;*/
    this.authservice.registerUser({email:em,password:pas,passwordConfirmation:passc})
   
   /* this.tokenauth.patch('users/'+this.tokenauth.currentUserData.id,{nickname:nk,name:n,email:em,encrypted_password:pas,image:'assets/img/avatar.png'}).subscribe(data=>{
      console.log(data)
    })*/
  
  }
  
   
}
