import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private baseUrl ="http://localhost:8088/api/v1/employees";
  private baseUrl ="http://10.11.201.241:8088/backend-0.0.1-SNAPSHOT/api/v1/employees";

  constructor(private httpClient: HttpClient ) { }

  getEmployeeList():Observable<Employee[]>{
    console.log('base URL'+this.baseUrl);
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }
  getEmpById(id: Number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number,employee: Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteemployee(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
