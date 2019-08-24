import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { map } from 'rxjs/operators';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

declare var $;
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = new MatTableDataSource();
  
  users:user[];
  constructor(private tokenauth:Angular2TokenService,private cdr: ChangeDetectorRef) {
     
    this.tokenauth.get("users").subscribe(data=>{
      this.users=data.json()
      this.dataSource.data=(this.users)
      console.log(JSON.stringify(this.users))
      console.log(this.dataSource.data) 
    })
    
    
   }
   applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    
    //this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

   }
   editProfile(firstname,lastname,email,adresse,image,id){
     console.log(image)
    if (firstname===""|| lastname==="" || adresse===""||email==="") {
      alert ("fill all the fields")
    } else {
      
    
    console.log(id)
   
    this.tokenauth.patch("users/"+id,{name:firstname,nickname:lastname,email:email,image:image}).subscribe(data=>{
      this.tokenauth.get("users").subscribe(data=>{
        this.users=data.json()
        this.dataSource.data=(this.users)
        
      })
    })
  }
 }
 delete(id){
  this.tokenauth.delete("users/"+id).subscribe(data=>{
    this.tokenauth.get("users").subscribe(data=>{
      this.users=data.json()
      this.dataSource.data=(this.users)
      
    })
  })
 

}
}


