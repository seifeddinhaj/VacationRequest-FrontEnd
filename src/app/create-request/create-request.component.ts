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
      
    
    this.tokenauth.post("requests",{startDate:startDate,endDate:endDate,reason:reason,accepted:false,treated:false,comment:null,user_id:localStorage.getItem("id")})
    .subscribe(data=>{
      alert("created successfully")
      location.reload()
    })
    
  }

  }
}
