import { Component, OnInit } from '@angular/core';
;
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private router:Router,private authservice:AuthService) {
  
    
   }

  ngOnInit() {
  }
  toSignup(){
    this.router.navigateByUrl('/auth/signUp');

  }
  logOut() {
    this.authservice.logOutUser();  }
    isAdmin():boolean{
if(JSON.parse(localStorage.getItem('user'))=="admin@yahoo.com")
return true;
else
return false;
    }
}
