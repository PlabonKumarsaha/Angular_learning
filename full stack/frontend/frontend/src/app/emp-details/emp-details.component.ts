import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  id : number =0;
  employee : Employee = new Employee();

  constructor(private route : ActivatedRoute,
    private router: Router,
    private empService : EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empService.getEmpById(this.id).subscribe(
      data =>{
        this.employee = data;
      }

    )

  }

}
