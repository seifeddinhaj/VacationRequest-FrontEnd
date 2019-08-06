import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  constructor(private tokenauth:Angular2TokenService) { }

  ngOnInit() {
  }
  createReq(startDate,endDate,reason){
    this.tokenauth.post("requests",{startDate:startDate,endDate:endDate,reason:reason,accepted:false,treated:false,comment:null,user_id:localStorage.getItem("id")})


  }
}
