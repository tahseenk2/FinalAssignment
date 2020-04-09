import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './login/employee-login/employee-login.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children:[
    {path:'',redirectTo:'adminLogin',pathMatch:'full'},
    {path:'adminLogin', component: AdminLoginComponent},
    {path:'employeeLogin', component: EmployeeLoginComponent}
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
