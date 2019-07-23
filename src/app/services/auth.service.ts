import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import{map} from 'rxjs/operators'
import { user } from '../models/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user:user;
  constructor(private authService: Angular2TokenService,private router:Router) {
  
 

   }
   logOutUser() {

    
          localStorage.clear();
         this.router.navigateByUrl("/")
     
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('id'));
    return  user  !==  null;
} 
  registerUser(signUpData:  {email: string, password: string, passwordConfirmation: string}) {
    this.authService.registerAccount(signUpData).subscribe(

      res => {

      alert("account created succesfully!")
      },

      err => {
        alert( err);
      }
      )
    
  }

  logInUser(signInData: {email: string, password: string}) {

     this.authService.signIn(signInData).subscribe(
        res => {
          alert("login succes!")
        
         
          localStorage.setItem("email", this.authService.currentUserData.email);
          localStorage.setItem("name",this.authService.currentUserData.name);
          localStorage.setItem("lastname",this.authService.currentUserData.nickname);
          localStorage.setItem("id",JSON.stringify(this.authService.currentUserData.id));
        
          
        
         
        },
        err => {
          alert("Invalid login credentials. Please try again.");
          

        }
       
    );
  
  }
}
