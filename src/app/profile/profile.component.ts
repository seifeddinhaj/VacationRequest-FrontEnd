import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name;lastname;email;
  constructor() {
this.email=localStorage.getItem("email");
this.name=localStorage.getItem("name");
this.lastname=localStorage.getItem("lastname");
  }

  ngOnInit() {
  }

}
