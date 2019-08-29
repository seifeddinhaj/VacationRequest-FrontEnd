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
      
        console.log("==="+res)
        localStorage.setItem("email", this.tokenauth.currentUserData.email);
        localStorage.setItem("name",this.tokenauth.currentUserData.name);
        localStorage.setItem("lastname",this.tokenauth.currentUserData.nickname);
        localStorage.setItem("id",JSON.stringify(this.tokenauth.currentUserData.id));
        localStorage.setItem("image",this.tokenauth.currentUserData.image);
        
      
        
        this.tokenauth.get("users/"+localStorage.getItem("id")).subscribe(data=>{
          let dt=data.json()
          localStorage.setItem("adresse",dt.adresse);
          console.log(dt.adresse)
      
        })
        
      },
      err => {
        alert("Invalid login credentials. Please try again.");
        

      }
      
     
  );
  

  }

}
