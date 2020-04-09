import { Component, OnInit } from '@angular/core';
import { AproveListDataService } from './aprove-list-data.service';
import { AproveList } from './aprove-list.model';
import { AprovePut } from './aprove-put.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aprove-leave',
  templateUrl: './aprove-leave.component.html',
  styleUrls: ['./aprove-leave.component.css']
})
export class AproveLeaveComponent implements OnInit {

  errorMessage:string;
  name:string;
  leave:string;
  temp:AproveList;
  constructor(private approvedata:AproveListDataService,private route:Router,private ar:ActivatedRoute, private http:HttpClient) {}
  e1:Array<AproveList>;
  url:string;
  eput:AprovePut={
    a_id:null,
    empId:null,
    lId:null,
    a_start:null,
    a_end:null,
    a_status:null
  };
  ngOnInit(): void {
    this.approvedata.getEmployeeLeaves().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
  give(id:number){
    for(var i=0;i<this.e1.length;i++){
      if(this.e1[i].aid==id){
        this.temp=this.e1[i];
      }
    }
    this.send();
  }
  send(){
    this.eput.a_id=this.temp.aid;
    this.eput.empId=this.temp.employeeId;
    this.eput.lId=this.temp.leaveId;
    this.eput.a_start=this.temp.start;
    this.eput.a_end=this.temp.end;
    this.eput.a_status=this.temp.status;
    this.url=`http://localhost:51597/api/Approves/${this.eput.a_id}`;
    this.http.put(this.url, JSON.stringify(this.eput),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      ()=>{
        console.log("Success")
      }
    );
    this.route.navigate(['/adminArea/aproveLeave']);
  }
  daysdifference(ds:string,de:string):number{
    var date1 = new Date(ds);
    var date2 = new Date(de);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff+1;
  }
}
