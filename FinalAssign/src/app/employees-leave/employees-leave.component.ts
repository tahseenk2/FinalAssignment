import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from '../leave/leave-data.service';
import { leave } from '../leave/leave.model';
import { AprovePut } from '../employee/aprove-leave/aprove-put.model';
import { AproveListDataService } from '../employee/aprove-leave/aprove-list-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IdService } from '../employee-area/id.service';

@Component({
  selector: 'app-employees-leave',
  templateUrl: './employees-leave.component.html',
  styleUrls: ['./employees-leave.component.css']
})
export class EmployeesLeaveComponent implements OnInit {

  constructor(private leavedata:LeaveDataService, private approveleavedata: AproveListDataService,
     private route:Router, private uid:IdService,private ar:ActivatedRoute) { }
errorMessage:string;
eid:number;
leavelist:Array<leave>
leave:AprovePut={
  a_id:0,
  empId:null,
  lId:null,
  a_start:null,
  a_end:null,
  a_status:"pending"
};
ltype:string;
start:Date;
end:Date;
  ngOnInit(): void {
    this.ar.params.subscribe(params =>{
      this.eid= +params['id'];
      });
    this.leavedata.getLeaves().subscribe(
      l => {
        return this.leavelist = l;
      },
      error => this.errorMessage = <any>error
    );
  }
  save(){
    for (var i = 0; i < this.leavelist.length; i++) {
      if(this.leavelist[i].leave_name == this.ltype){
        this.leave.lId=this.leavelist[i].leave_id;
      }
    }
    this.leave.empId=this.eid;
    this.leave.a_start= this.start.toString();
    this.leave.a_end= this.end.toString();
    this.approveleavedata.addEmployeeLeave(this.leave);
  this.route.navigate(['/employeeArea/employeesLeaveList',this.eid]);
  }
}
