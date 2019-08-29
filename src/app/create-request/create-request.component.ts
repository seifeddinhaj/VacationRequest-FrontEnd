import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  constructor(private tokenauth:Angular2TokenService ,private router:Router) { }

  ngOnInit() {
  }
  createReq(startDate,endDate,reason){
    if (startDate===""|| endDate===""||reason==="") {
      alert("you have to fill all the fields to create your request")
      
    } else {
      let newDateStart = new Date(startDate);
let newDateEnd = new Date(endDate);
let dif= Math.abs(newDateEnd.getTime() - newDateStart.getTime());
var diffDays = Math.ceil(dif/ (1000 * 3600 * 24)); 

      
    
    this.tokenauth.post("requests",{startDate:startDate,endDate:endDate,reason:reason,accepted:false,treated:false,comment:null,user_id:localStorage.getItem("id")})
    .subscribe(data=>{
      this.tokenauth.get("users/"+localStorage.getItem("id")).subscribe(data=>{
        let dt=data.json()
        console.log("new blance"+(dt.balance-diffDays))
        if(dt.balance-diffDays<0){
          alert("your balance will be "+ (dt.balance-diffDays)+" Days,your request will highly  be rejcted by the administration! ")
        }
        this.tokenauth.patch("users/"+localStorage.getItem("id"),{name:localStorage.getItem("name"),
        nickname:localStorage.getItem("lastname"),
      email:localStorage.getItem("email"),
      image:localStorage.getItem("image"),
      adresse:localStorage.getItem("adresse"),
      balance:dt.balance-diffDays})
      
      })
     



      alert("created successfully")
            location.reload()
    })
    
  }

  }
}
