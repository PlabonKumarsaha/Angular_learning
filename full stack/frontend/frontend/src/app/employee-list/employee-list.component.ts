import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[] =[];

  constructor(private employeeService : EmployeeService,
    private router : Router) { }

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
  updateEmployee(id : number){
    this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id : number){
    this.employeeService.deleteemployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployeeService();
    })

  }
  employeeDetails(id: number) {
    this.router.navigate(['emp-details',id])
  }

}
