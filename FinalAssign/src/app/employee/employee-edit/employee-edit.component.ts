import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private edata:EmployeeDataService,private route:Router,private ar:ActivatedRoute, private http:HttpClient) { }
  id:number;
  url:string;
  editedEmployee:employee;
  employeeValue:employee={
    emp_id:0,
    emp_name:null,
    emp_dob:null,
    emp_doj:null,
    emp_salary: null,
    emp_email:null
  };

  ngOnInit() {
    this.ar.params.subscribe(params =>{
      this.id= +params['id'];
      });
      this.edata.getEmployee(this.id).subscribe(
        e => this.employeeValue = e
      );
      this.url=`http://localhost:51597/api/Employees/${this.id}`;
    }
    editemployee(){
      this.http.put(this.url, JSON.stringify(this.employeeValue),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
        ()=>{
          return this.edata.getEmployees();
        }
      );
      this.route.navigate(['/adminArea/employeeList']);
    }

}
