import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  dob:Date;
  doj:Date;

  constructor(private employeedata:EmployeeDataService,private route:Router) { 
  }
  employeeValue:employee={
    emp_id:0,
    emp_name:null,
    emp_dob:null,
    emp_doj:null,
    emp_salary: null,
    emp_email:null
  };
  
  
  ngOnInit(): void {
    
  }
  
  addemployee(){
    this.employeeValue.emp_doj=this.doj.toString();
    this.employeeValue.emp_dob=this.dob.toString();
    this.employeedata.addEmployee(this.employeeValue);
    this.route.navigate(['/adminArea/employeeList']);
  }

}
