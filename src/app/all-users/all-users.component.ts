import { Component, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  @ViewChild('dataTable',{static: true}) table;
  dataTable: any;
  dtOption: any = {};
  constructor() { }

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

}
