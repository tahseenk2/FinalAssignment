import { Component, OnInit } from '@angular/core';
import { IdService } from '../employee-area/id.service';
import { AproveListDataService } from '../employee/aprove-leave/aprove-list-data.service';
import { AproveList } from '../employee/aprove-leave/aprove-list.model';
import { ActivatedRoute } from '@angular/router';
import { LeaveDataService } from '../leave/leave-data.service';
import { leave } from '../leave/leave.model';

@Component({
  selector: 'app-employees-leave-list',
  templateUrl: './employees-leave-list.component.html',
  styleUrls: ['./employees-leave-list.component.css']
})
export class EmployeesLeaveListComponent implements OnInit {

  constructor(private eldata:AproveListDataService,private ar:ActivatedRoute, private l:LeaveDataService) { }
eid:number;
errorMessage:string;
ldata:Array<AproveList>;
lm:Array<leave>;
  ngOnInit(): void {
    this.ar.params.subscribe(params =>{
      this.eid= +params['id'];
      });
    this.eldata.getEmployeeLeaves().subscribe(
      e => {
        return this.ldata = e;
      },
      error => this.errorMessage = <any>error
    );
    this.l.getLeaves().subscribe(
      l => {
        return this.lm = l;
      },
      error => this.errorMessage = <any>error
    );
  }
    filter(){
      return this.ldata.filter(x => x.employeeId == this.eid);
  }
  daysdifference(ds:string,de:string):number{
    var date1 = new Date(ds);
    var date2 = new Date(de);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff+1;
  }
  

}
