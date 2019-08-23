import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Angular2TokenService } from 'angular2-token';
import { map } from 'rxjs/operators';
import { Requests } from '../models/requests';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { user } from '../models/user';
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
@ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  displayedColumns: string[] = ['weight','position', 'name', 'action'];
  dataSource = new MatTableDataSource();
  requets:Request[];
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
})

}
applyFilter(filterValue: string) {
filterValue = filterValue.trim();
filterValue = filterValue.toLowerCase();
this.dataSource.filter = filterValue;
}
  
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort; 
    
    
    
  }
  accpet(id,startDate,endDate,reason,treated,accepted,user_id){

console.log(startDate)
treated=1
accepted=1
this.authToken.patch("requests/"+id,{startDate:startDate,endDate:endDate,reason:reason,treated:treated,accepted:accepted,user_id:user_id}).subscribe((data=>
  {
  console.log(data)
  this.authToken.get("requests").subscribe(data=>{
    this.requestss=data.json()
    this.requestss=this.requestss.filter(x=>x.treated==true)
  })

  this.authToken.get('requests')
  .subscribe((data) => {
    
    this.requests=data.json()
    this.requests=this.requests.filter(x=>x.treated==false)
    this.dataSource.data=(this.requests)
    //console.log(this.requests)
  
    });


}));

 
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
