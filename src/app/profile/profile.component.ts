import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name;lastname;email;
selectedFile:FileList;
imgPreview:string;
image;
adresse;
profile;
  constructor(private tokenauth:Angular2TokenService ,private router:Router) {
this.email=localStorage.getItem("email");
this.name=localStorage.getItem("name");
this.lastname=localStorage.getItem("lastname");
this.image=localStorage.getItem("image");
this.adresse=localStorage.getItem("adresse")
this.tokenauth.get("users/"+localStorage.getItem("id")).subscribe(data =>{
  this.profile=data.json();
  console.log(this.profile)
})
 }

  ngOnInit() {
  }
  chooseFiles(event){
    console.log(event);
    this.selectedFile = event.target.files;
    if(this.selectedFile){
this.imgPreview=this.selectedFile.item(0).name
      console.log(this.selectedFile.item(0).name)
    }
    
  }

  editProfile(firstname,lastname,email,adresse){
    if (firstname===""|| lastname==="" || adresse==="") {
      alert ("fill all the fields")
    } else {
      
    
    console.log(firstname)
    localStorage.setItem("name",firstname);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("image",this.imgPreview);
    localStorage.setItem("adresse",adresse);
    this.tokenauth.patch("users/"+localStorage.getItem('id'),{name:firstname,nickname:lastname,email:email,image:this.imgPreview,adresse:adresse})
    .subscribe(data=>{
      location.reload()
    })
    
  }
 }
 resetPassword(){
   this.router.navigateByUrl('auth/resetPassword')
   /*this.tokenauth.resetPassword({
    email:"seif1994@yahoo.fr"
  }).subscribe(
    res =>      console.log(res),
    error =>    console.log(error)
  ); 
   this.tokenauth.updatePassword({
    password:             'adminadmin',
    passwordConfirmation: 'adminadmin',
    passwordCurrent:      'seifseif',
    resetPasswordToken:   '$2a$12$Az60LCk1Qu5q/tqVOIhEyO.xu.mVFqFHjllZs.GpZRtZtl9jUuura","updated_at":"2019-08-17T13:31:08.801Z',
}).subscribe(
    res =>      console.log(res),
    error =>    console.log(error)
); 
console.log(this.tokenauth.currentUserData)*/

}

}

