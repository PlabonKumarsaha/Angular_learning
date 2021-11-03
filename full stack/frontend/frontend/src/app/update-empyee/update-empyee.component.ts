import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-empyee',
  templateUrl: './update-empyee.component.html',
  styleUrls: ['./update-empyee.component.css']
})
export class UpdateEmpyeeComponent implements OnInit {

  constructor() { }
  employee : Employee = new Employee();

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
