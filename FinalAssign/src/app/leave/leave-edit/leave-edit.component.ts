import { Component, OnInit } from '@angular/core';
import { leave } from '../leave.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LeaveDataService } from '../leave-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-edit',
  templateUrl: './leave-edit.component.html',
  styleUrls: ['./leave-edit.component.css']
})
export class LeaveEditComponent implements OnInit {

  constructor(private ldata:LeaveDataService,private route:Router,private ar:ActivatedRoute, private http:HttpClient) { }
  id:number;
  url:string;
  leaveValue:leave={
    leave_id:0,
    leave_name:null,
    alloweddays:null
  };
  ngOnInit() {
    this.ar.params.subscribe(params =>{
      this.id= +params['id'];
      });
      this.ldata.getLeave(this.id).subscribe(
        e => this.leaveValue = e
      );
      this.url=`http://localhost:51597/api/Leaves/${this.id}`;
  }
  
  editleave(){
    this.http.put(this.url, JSON.stringify(this.leaveValue),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      ()=>{
        return this.ldata.getLeaves();
      }
    );
    this.route.navigate(['/adminArea/leaveList']);
  }

}
