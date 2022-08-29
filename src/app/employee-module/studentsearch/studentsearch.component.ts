import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/Services/employeeService/employeeservice.service';

@Component({
  selector: 'app-studentsearch',
  templateUrl: './studentsearch.component.html',
  styleUrls: ['./studentsearch.component.css']
})
export class StudentsearchComponent implements OnInit {
  x:any;
  userid:any;
  assingedValue:any;

  constructor(private empserve:EmployeeserviceService) { }

  ngOnInit(): void {
  }
  getEmployeeById(id:any)
  {
    console.log("getEmployee !!");
    this.empserve.getEmployeeById(id).subscribe(data=>{console.log(data),this.assingedValue=data});
  }
  searchRequest()
  {
    this.empserve.getDocumentById(this.userid).subscribe(data=>{console.log("search method",data),this.x=data});
    console.log("search method",this.x);
    this.getEmployeeById(this.x.application_details.assigned);
  }


}
