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
  constructor(private authservice:AuthService,private tokenauth :Angular2TokenService) { }

  ngOnInit() {
  }
  login(em,pass){
this.signInUser.email=em;
this.signInUser.password=pass;
    this.tokenauth.signIn(this.signInUser).subscribe(
      res => {
        alert("login succes!")
      
       
        localStorage.setItem("email", this.tokenauth.currentUserData.email);
        localStorage.setItem("name",this.tokenauth.currentUserData.name);
        localStorage.setItem("lastname",this.tokenauth.currentUserData.nickname);
        localStorage.setItem("id",JSON.stringify(this.tokenauth.currentUserData.id));
        localStorage.setItem("image",this.tokenauth.currentUserData.image);
        localStorage.setItem("adresse",null);
      
        
      
        
      },
      err => {
        alert("Invalid login credentials. Please try again.");
        

      }
     
  );


  }

}
