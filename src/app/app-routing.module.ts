import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeesComponent }  from './employees/employees.component';
import  { EmployeeCreateComponent } from './employee-create/employee-create.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "employee"},
  {path: "employee", component: EmployeesComponent},
  {path: "employee-details/:id", component: EmployeeDetailsComponent},
  {path: "employee-update/:id", component: EmployeeUpdateComponent},
  {path: "employee-create", component: EmployeeCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
