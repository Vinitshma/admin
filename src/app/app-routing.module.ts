import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo:'add-employee',pathMatch: 'full'},
  {path: 'add-employee', component:AddEmployeeComponent},
  {path: 'employee-list', component:EditEmployeeComponent},
  {path: '*', component:EditEmployeeComponent},
  
   // wild
   {path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
