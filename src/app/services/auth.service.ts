import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSignedIn$: Subject<boolean> = new Subject();
  test=false;
  constructor(private authService: Angular2TokenService) {
   /* this.authService.validateToken().subscribe(
      res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
  );*/
  this.authService.validateToken().subscribe(
    res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
);
   }
   logOutUser() {

    
          localStorage.removeItem('user');
         
     
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
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
         
          localStorage.setItem("user", JSON.stringify(this.authService.currentUserData.email));
        
          
        
         
        },
        err => {
          alert("Invalid login credentials. Please try again.");
          

        }
       
    );
  
  }
}
