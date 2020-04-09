import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email:string;
  log:boolean=false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
login():void{
  console.log("hello admin");
  if(this.email=="adminemployee@gmail.com"){
    this.route.navigate(['/adminArea/employeeList']);
  }else{
    alert("This is not a valid Admin");
  }
}
}
