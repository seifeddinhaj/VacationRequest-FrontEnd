import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

import { Router } from '@angular/router';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  requests;
  
  constructor(private authToken:Angular2TokenService ,private router:Router) {
    this.authToken.get('requests')
.subscribe((data) => {
  
  this.requests=data.json()
 this.requests=this.requests.filter(x=>x.user.id==localStorage.getItem("id"))
  
console.log(this.requests)

  });
   }

  ngOnInit() {
  }
  update(id,startDate,endDate,reason){
    console.log(id)
this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason})

  }
  delete(id){
    this.authToken.delete("requests/"+id)
    this.authToken.get('requests')
    .subscribe((data) => {
      
      this.requests=data.json()
     this.requests=this.requests.filter(x=>x.user.id==localStorage.getItem("id"))})

  }
}
