import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeService/employeeservice.service';

@Component({
  selector: 'app-studentrequests',
  templateUrl: './studentrequests.component.html',
  styleUrls: ['./studentrequests.component.css']
})
export class StudentrequestsComponent implements OnInit {
  xapp:any;
  currentUser:any;
  constructor(private empserve:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {
    
    this.empserve.appliedscholarship().subscribe(data=>{console.log(data),this.xapp=data});
    this.empserve.getCurrentUser().subscribe(data=>{console.log(data),this.currentUser=data});
    console.log("current user data",this.currentUser);
   // this.empserve.applieddocuments().subscribe(data=>{console.log(data),this.xdoc=data});
    //this.empserve.appliedusers().subscribe(data=>{console.log(data),this.xuser=data});
  }
  public onClick(id:number)
  {
    this.router.navigate(['request/details',id]);
  }

}
