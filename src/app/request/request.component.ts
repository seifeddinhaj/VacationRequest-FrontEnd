import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
requests ;
namee;
  constructor(private authToken:Angular2TokenService) {
    
this.authToken.get('requests')
.subscribe((data) => {
  
  this.requests=data.json()
  console.log(this.requests)

  });
  
  }
  ngOnInit() {
  }
getuserName(id):string{
  
  this.authToken.get("users/"+id).subscribe(data =>{
    this.namee=data.json()
  })
  
  return this.namee.name+" "+this.namee.nickname;
  


}
}
