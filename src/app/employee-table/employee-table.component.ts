import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../Services/employee.service';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  dataSource:any=[];
  displayedColumns:string[]=['Sr No', 'Full Name',  'EmailId', 'Contact Number','Date Of Birth','Address']

  constructor(private _employeeService:EmployeeServices) { }

  ngOnInit(): void {
    this._employeeService.getEmployeeList().subscribe(dataList=>this.dataSource = dataList);
  }
}
