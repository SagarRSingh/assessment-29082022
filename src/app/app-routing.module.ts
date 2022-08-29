import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  {path:'employee-form', component: EmployeeFormComponent},
  {path:'employee-list', component: EmployeeTableComponent},
  {path:'', redirectTo:'employee-form', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
