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
    let newDateStart = new Date(startDate);
    let newDateEnd = new Date(endDate);
    console.log(newDateStart)
    console.log(newDateEnd)
    let newdif= Math.abs(newDateEnd.getTime() - newDateStart.getTime());
    var newdiffDays = Math.ceil(newdif/ (1000 * 3600 * 24));
    this.authToken.get("requests/"+id).subscribe(data=>{
      let dt=data.json();
      let oldDateStart = new Date(dt.startDate);
      let oldDateEnd = new Date(dt.endDate);
      console.log(oldDateStart)
      console.log(oldDateEnd)
      let olddif= Math.abs(oldDateEnd.getTime() - oldDateStart.getTime());
      var olddiffDays = Math.ceil(olddif/ (1000 * 3600 * 24));
      this.authToken.patch("users/"+localStorage.getItem("id"),{name:localStorage.getItem("name"),
      nickname:localStorage.getItem("lastname"),
    email:localStorage.getItem("email"),
    image:localStorage.getItem("image"),
    adresse:localStorage.getItem("adresse"),
    balance:dt.user.balance+(olddiffDays-newdiffDays)})
    this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason})
    })


  }
  delete(id,startDate,endDate,balance,treated){
    let newDateStart = new Date(startDate);
    let newDateEnd = new Date(endDate);
    console.log(newDateStart)
    console.log(newDateEnd)
    let dif= Math.abs(newDateEnd.getTime() - newDateStart.getTime());
    var diffDays = Math.ceil(dif/ (1000 * 3600 * 24));
    balance=balance+diffDays 
    this.authToken.delete("requests/"+id).subscribe(data=>{
      console.log(data.status)
      if(!treated){
      this.authToken.patch("users/"+localStorage.getItem("id"),
      {
        name:localStorage.getItem("name"),
        nickname:localStorage.getItem("lastname"),
      email:localStorage.getItem("email"),
      image:localStorage.getItem("image"),
      adresse:localStorage.getItem("adresse"),
      balance:balance
    }
    )
  }

      this.authToken.get('requests')
      .subscribe((data) => {
        
        this.requests=data.json()
       this.requests=this.requests.filter(x=>x.user.id==localStorage.getItem("id"))
      console.log(this.requests)})

    })
   

  }
}
