import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeService/employeeservice.service';

@Component({
  selector: 'app-employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.css']
})
export class EmployeesearchComponent implements OnInit {

  x:any;
  userid:any;

  constructor(private empserve:EmployeeserviceService) { }

  ngOnInit(): void {
  }
  searchRequest()
  {
    this.empserve.getRequestById(this.userid).subscribe(data=>{this.x=data});
  }

}
