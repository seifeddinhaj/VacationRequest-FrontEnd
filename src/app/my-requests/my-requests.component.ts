import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs';
import { userInfo } from 'os';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  requests;
  req:Observable<any>;
  constructor(private authToken:Angular2TokenService) {
    this.authToken.get('requests')
.subscribe((data) => {
  
  this.requests=data.json()
 this.requests=this.requests.filter(x=>x.user.id==localStorage.getItem("id"))
  
console.log(this.requests)

  });
   }

  ngOnInit() {
  }

}
