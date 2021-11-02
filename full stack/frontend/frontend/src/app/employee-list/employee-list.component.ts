import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[] =[];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  //   this.employees=[
  //     {
  //       "id":1,
  //       "fname":"Plabon",
  //       "lname":"Saha",
  //       "email":"pkumarsaha71@gmail.com"
  //     },
  //     {
  //       "id":1,
  //       "fname":"Shouri",
  //       "lname":"Saha",
  //       "email":"Shouri@gmail.com"
  //     }
  //   ]
  this.getEmployeeService()
  }

  private getEmployeeService() {
    this.employeeService.getEmployeeList().subscribe(data =>
      {
        this.employees=data;
      })
  }

}
