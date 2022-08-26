import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeService/employeeservice.service';

@Component({
  selector: 'app-employeerequests',
  templateUrl: './employeerequests.component.html',
  styleUrls: ['./employeerequests.component.css']
})
export class EmployeerequestsComponent implements OnInit {

  xapp:any;
  xdoc:any;
  xuser:any;
  constructor(private empserve:EmployeeserviceService,private router:Router) { }

  ngOnInit(): void {
    
    this.empserve.appliedscholarship().subscribe(data=>{console.log(data),this.xapp=data});
   // this.empserve.applieddocuments().subscribe(data=>{console.log(data),this.xdoc=data});
    //this.empserve.appliedusers().subscribe(data=>{console.log(data),this.xuser=data});
  }
  public onClick(id:number)
  {
    this.router.navigate(['request/details',id]);
  }

}
