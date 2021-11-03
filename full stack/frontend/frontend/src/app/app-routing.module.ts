import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmpyeeComponent } from './update-empyee/update-empyee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'create-employee',component: CreateEmployeeComponent},
  {path:'update-employee/:id',component: UpdateEmpyeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
