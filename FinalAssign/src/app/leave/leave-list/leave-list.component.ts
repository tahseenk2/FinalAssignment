import { Component, OnInit } from '@angular/core';
import { LeaveDataService } from '../leave-data.service';
import { leave } from '../leave.model';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {

  errorMessage:string;
  constructor(private leavedata:LeaveDataService) { }
  e1:Array<leave>;
  ngOnInit(): void {
    this.leavedata.getLeaves().subscribe(
      e1 => {
        return this.e1 = e1;
      },
      error => this.errorMessage = <any>error
    );
  }
delete(id:number){
this.leavedata.deleteLeave(id);
window.location.reload();

}

}
