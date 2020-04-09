import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminAreaComponent } from './admin-area.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from '../employee/employee-add/employee-add.component';
import { LeaveAddComponent } from '../leave/leave-add/leave-add.component';
import { LeaveListComponent } from '../leave/leave-list/leave-list.component';
import { AproveLeaveComponent } from '../employee/aprove-leave/aprove-leave.component';
import { SearchPipe } from '../search.pipe';
import { EmployeeEditComponent } from '../employee/employee-edit/employee-edit.component';
import { LeaveEditComponent } from '../leave/leave-edit/leave-edit.component';



@NgModule({
  declarations: [
    AdminAreaComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    LeaveAddComponent,
    LeaveListComponent,
    SearchPipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: 'adminArea', component: AdminAreaComponent,children:[
        {path:'',redirectTo:'employeeList',pathMatch:'full'},
        { path: 'employeeAdd', component: EmployeeAddComponent },
        { path: 'employeeList', component: EmployeeListComponent },
        { path: 'employeeEdit/:id', component: EmployeeEditComponent },
        { path: 'aproveLeave', component: AproveLeaveComponent },
        { path: 'leaveAdd', component: LeaveAddComponent },
        { path: 'leaveList', component: LeaveListComponent },
        { path: 'leaveEdit/:id', component: LeaveEditComponent },
    ] },
    ])
  ]
})
export class AdminAreaModule { }
