import { Component, OnInit, ViewChild } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

import { Requests } from '../models/requests';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

declare var $;
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
requests ;
requestss ;
dataTarget=27;
namee;
req:Requests;
@ViewChild('dataTable',{static: true}) table;
dataTable: any;
dtOption: any = {};
@ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;

 // @ViewChild(MatPaginator,{static: true}) paginator1: MatPaginator;
 // @ViewChild(MatSort,{static: true}) sort1: MatSort;
  //@ViewChild(MatPaginator,{static: true}) paginator1: MatPaginator;

  displayedColumns: string[] = ['weight','position', 'name', 'action'];
  dataSource = new MatTableDataSource();
  dataSourceTreated = new MatTableDataSource();
  //requets:Request[];
  constructor(private authToken:Angular2TokenService) {
    

  
  

this.authToken.get("requests").subscribe(data=>{
  this.requests=data.json()
  this.requests=this.requests.filter(x=>x.treated==false)
  this.dataSource.data=(this.requests)
  console.log(this.requests)
  console.log(this.dataSource.data) 
})

this.authToken.get("requests").subscribe(data=>{
  this.requestss=data.json()
  this.requestss=this.requestss.filter(x=>x.treated==true)
  this.dataSourceTreated.data=this.requestss
})

this.authToken.get("requests/64").subscribe(data=>{
  console.log(data.json())
 
})
}
applyFilter(filterValue: string) {
//filterValue = filterValue.trim();
//filterValue = filterValue.toLowerCase();
this.dataSource.filter = filterValue;
}
  
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort; 
   /// this.dataSourceTreated.paginator = this.paginator1;
    //this.dataSourceTreated.sort=this.sort1; 
    
    
    
  }
  accpet(id,startDate,endDate,reason,treated,accepted,user_id){

    console.log(user_id)
treated=1
accepted=1
let newDateStart = new Date(startDate);
let newDateEnd = new Date(endDate);
console.log(newDateStart)
console.log(newDateEnd)
let dif= Math.abs(newDateEnd.getTime() - newDateStart.getTime());
var diffDays = Math.ceil(dif/ (1000 * 3600 * 24)); 
//balance=balance-diffDays
//console.log(balance)
console.log(diffDays)
this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason,treated:treated,accepted:accepted,user_id:user_id}).subscribe((data=>
  {
  console.log(data)
  this.authToken.get("requests").subscribe(data=>{
    this.requestss=data.json()
    this.requestss=this.requestss.filter(x=>x.treated==true)
  })
  /* this.authToken.patch("users/"+user_id,
  {name:name,
    nickname:lastname,
  email:email,
  image:image,
  adresse:adresse,
  balance:balance}) */
  this.authToken.get('requests')
  .subscribe((data) => {
    
    this.requests=data.json()
    this.requests=this.requests.filter(x=>x.treated==false)
    this.dataSource.data=(this.requests)
    //console.log(this.requests)
  
    });


}));

 
  }
  refuse(id,startDate,endDate,reason,treated,accepted,user_id ,comment,balance,name,lastname,adresse,image,email){

    console.log(comment)
    treated=1
    accepted=0
    let newDateStart = new Date(startDate);
let newDateEnd = new Date(endDate);
console.log(newDateStart)
console.log(newDateEnd)
let dif= Math.abs(newDateEnd.getTime() - newDateStart.getTime());
var diffDays = Math.ceil(dif/ (1000 * 3600 * 24)); 
balance=balance+diffDays
console.log(balance)
    if (comment==="") {
      alert("fill the comment field")
    } else {
      this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason,treated:treated,accepted:accepted,user_id:user_id,comment:comment}).subscribe((data=>{
        console.log(data)

        this.authToken.patch("users/"+user_id,
  {name:name,
    nickname:lastname,
  email:email,
  image:image,
  adresse:adresse,
  balance:balance})
  /* this.authToken.get('requests')
  .subscribe((data) => {
    
    this.requests=data.json()
    this.requests=this.requests.filter(x=>x.treated==false)
    this.dataSource.data=(this.requests)
    //console.log(this.requests)
  
    }); */
////
this.authToken.get('requests')
  .subscribe((data) => {
    
    this.requests=data.json()
    this.requests=this.requests.filter(x=>x.treated==false)
    this.dataSource.data=(this.requests)
  console.log(this.requests)
  
    });
    ///
    this.authToken.get("requests").subscribe(data=>{
      this.requestss=data.json()
      this.requestss=this.requestss.filter(x=>x.treated==true)
    })
      }));
      
        }
      
    }
    
}
