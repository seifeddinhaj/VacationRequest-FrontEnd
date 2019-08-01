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
selectedFile:FileList;
imgPreview:string;
image;
  constructor(private tokenauth:Angular2TokenService) {
this.email=localStorage.getItem("email");
this.name=localStorage.getItem("name");
this.lastname=localStorage.getItem("lastname");
this.image=localStorage.getItem("image");
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

  editProfile(firstname,lastname,email){
    console.log(firstname)
    localStorage.setItem("name",firstname);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("image",this.imgPreview);
    this.tokenauth.patch("users/"+localStorage.getItem('id'),{name:firstname,nickname:lastname,email:email,image:this.imgPreview})
  }
}
