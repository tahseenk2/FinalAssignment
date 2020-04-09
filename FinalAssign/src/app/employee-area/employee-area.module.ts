import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { EmployeeAreaComponent } from './employee-area.component';
import { EmployeesLeaveComponent } from '../employees-leave/employees-leave.component';
import { EmployeesLeaveListComponent } from '../employees-leave-list/employees-leave-list.component';



@NgModule({
  declarations: [
    EmployeeAreaComponent,
    ProfileComponent,
    EmployeesLeaveComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'employeeArea', component: EmployeeAreaComponent,children:[
      {path:'',redirectTo:'profile',pathMatch:'full'},
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'employeesLeave/:id', component: EmployeesLeaveComponent },
      {path:'employeesLeaveList/:id', component: EmployeesLeaveListComponent}
      ] },
    ])
  ]
})
export class EmployeeAreaModule { }
