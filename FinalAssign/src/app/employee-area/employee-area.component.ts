import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdService } from './id.service';

@Component({
  selector: 'app-employee-area',
  templateUrl: './employee-area.component.html',
  styleUrls: ['./employee-area.component.css']
})
export class EmployeeAreaComponent implements OnInit {

  constructor(private uid:IdService) { }
eid:number;
  ngOnInit(): void {
    this.eid=this.uid.id;
  }

}
