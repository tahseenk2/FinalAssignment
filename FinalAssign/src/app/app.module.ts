import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeAreaModule } from './employee-area/employee-area.module';
import { AdminAreaModule } from './admin-area/admin-area.module';
import { AproveLeaveComponent } from './employee/aprove-leave/aprove-leave.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './login/employee-login/employee-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchApprovePipe } from './search-approve.pipe';
import { EmployeesLeaveListComponent } from './employees-leave-list/employees-leave-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { LeaveEditComponent } from './leave/leave-edit/leave-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AproveLeaveComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    SearchApprovePipe,
    EmployeesLeaveListComponent,
    EmployeeEditComponent,
    LeaveEditComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EmployeeAreaModule,
    AdminAreaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
