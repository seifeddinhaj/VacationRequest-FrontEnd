import { Component, OnInit } from '@angular/core';
;
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private router:Router,private authservice:AuthService) {
  
    console.log(this.authservice.userSignedIn$)
   }

  ngOnInit() {
  }
  toSignup(){
    this.router.navigateByUrl('/auth/signUp');

  }
  logOut() {
    this.authservice.logOutUser();  }
}
