import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee/employee-data.service';
import { employee } from '../employee/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errorMessage:string;
  eid:number;
  constructor(private employeedata:EmployeeDataService, private ar:ActivatedRoute) {}
  emp1:employee;
  ngOnInit() {
    this.ar.params.subscribe(params =>{
      this.eid= +params['id'];
      });
    this.employeedata.getEmployee(this.eid).subscribe(
      e1 => {
        return this.emp1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }

}
