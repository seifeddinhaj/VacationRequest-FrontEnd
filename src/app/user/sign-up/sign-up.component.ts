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
    email: '',
    name: '',
    nickname: '',
    
    password: '',
    passwordConfirmation: ''
  };

  constructor(private router:Router,private authservice :AuthService,private tokenauth:Angular2TokenService) { }

  ngOnInit() {
  }
  Registre(n,nk,em,pas,passc){
    this.signUpUser.name=n;
    this.signUpUser.nickname=nk;
    this.signUpUser.email=em;
    this.signUpUser.password=pas;
    this.signUpUser.passwordConfirmation=passc;
    this.authservice.registerUser(this.signUpUser)
    
    //this.authservice.logInUser({email:this.signUpUser.email,password:this.signUpUser.password})
    //this.tokenauth.patch('users/'+this.tokenauth.currentUserData.id,{nickname:'seif',name:'seif',email:this.tokenauth.currentUserData.email,provider:this.tokenauth.currentUserData.provider,image:this.tokenauth.currentUserData.image,uid:this.tokenauth.currentUserData.uid,id:this.tokenauth.currentUserData.id})
  this.router.navigateByUrl('/')
  }
}
