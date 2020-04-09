import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/employee/employee.model';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';
import { Router } from '@angular/router';
import { IdService } from 'src/app/employee-area/id.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  email:string;
  errorMessage:string;
  e1:Array<employee>;
  id:number;
  log:boolean=false;

  constructor(private employee:EmployeeDataService, private route:Router, private uid:IdService) { }

  ngOnInit(): void {
    this.employee.getEmployees().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
login():void{
  console.log("hello employee");
  for (var i = 0; i < this.e1.length; i++) {
    if(this.email == this.e1[i].emp_email){
      this.id=this.e1[i].emp_id;
      this.uid.id=this.e1[i].emp_id;
      this.log=true;
    }
  }
  if(this.log==true){
  this.route.navigate(['/employeeArea/profile',this.id]);
  }else{
  alert("This is not a valid employee id");}
}
}
