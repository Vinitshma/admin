import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo:'employees',pathMatch: 'full'},
  {path:'employees',component:EmployeesComponent },
  {path: 'addEmployee', component:AddEmployeeComponent},
  {path: 'employeelist', component:EmployeeListComponent},
  {path: '*', component:EmployeeListComponent},
  
   // wild
   {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
