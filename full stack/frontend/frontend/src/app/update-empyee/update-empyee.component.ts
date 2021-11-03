import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-empyee',
  templateUrl: './update-empyee.component.html',
  styleUrls: ['./update-empyee.component.css']
})
export class UpdateEmpyeeComponent implements OnInit {
  id : number =0;
  employee : Employee = new Employee();
  constructor(private empService : EmployeeService, private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empService.getEmpById(this.id).subscribe(
      data =>{
        this.employee = data;
      },
      err => console.log(err));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    this.empService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.goToEmployeeList();
    },
    err => console.log(err))
  }

}
