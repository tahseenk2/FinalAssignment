import { Component, OnInit } from '@angular/core';
import { leave } from '../leave.model';
import { LeaveDataService } from '../leave-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-add',
  templateUrl: './leave-add.component.html',
  styleUrls: ['./leave-add.component.css']
})
export class LeaveAddComponent implements OnInit {

  constructor(private leavedata:LeaveDataService, private route:Router) { 
  }
  leaveValue:leave={
    leave_id:0,
    leave_name:null,
    alloweddays:null
  };
  
  
  ngOnInit(): void {
    
  }
  
  addleave(){
    this.leavedata.addLeave(this.leaveValue);
    this.route.navigate(['/adminArea/leaveList']);
  }

}
