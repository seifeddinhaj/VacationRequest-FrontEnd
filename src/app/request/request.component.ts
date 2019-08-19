import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import { map } from 'rxjs/operators';
import { Requests } from '../models/requests';
declare var $;
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
requests ;
requestss ;
namee;
req:Requests;
@ViewChild('dataTable',{static: true}) table;
dataTable: any;
dtOption: any = {};
  constructor(private authToken:Angular2TokenService) {
    
this.authToken.get('requests')
.subscribe((data) => {
  
  this.requests=data.json()
  //console.log(this.requests)

  });
  
  
  
  
  }
  ngOnInit() {
    this.dtOption = {
      "paging":   true,
      "ordering": true,
      "info":     false
  };
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
    this.dataTable.DataTable(); 
  }
  accpet(id,startDate,endDate,reason,treated,accepted,user_id){

console.log(startDate)
treated=1
accepted=1
this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason,treated:treated,accepted:accepted,user_id:user_id}).subscribe((data=>{
  console.log(data)
}));
this.authToken.get('requests')
.subscribe((data) => {
  
  this.requests=data.json()
  //console.log(this.requests)

  });
 
  }
  refuse(id,startDate,endDate,reason,treated,accepted,user_id ,comment){

    console.log(comment)
    treated=1
    accepted=0
    if (comment==="") {
      alert("fill the comment field")
    } else {
      this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason,treated:treated,accepted:accepted,user_id:user_id,comment:comment}).subscribe((data=>{
        console.log(data)
      }));
      this.authToken.get('requests')
  .subscribe((data) => {
    
    this.requests=data.json()
  console.log(this.requests)
  
    });
        }
      
    }
    
}
