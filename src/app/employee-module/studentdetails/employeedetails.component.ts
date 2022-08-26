import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeService/employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  x:any;
  xdoc:any;
  xuser:any;
  stuid:any;
  constructor(private empserve:EmployeeserviceService,private aroute:ActivatedRoute,private route:Router) { 
    this.stuid=this.aroute.snapshot.params['id'];
    this.fulldetails();
  }

  ngOnInit(): void {
  }
  private fulldetails()
  {
    this.empserve.getDocumentById(this.stuid).subscribe(data=>{console.log(data),this.x=data});
  }
  public approve()
  {
    this.empserve.approveStatus(this.x.appId,this.x).subscribe(data=>this.x=data);
    window.alert("REQUEST APPROVED !!!");
    this.route.navigate(['student/requests']);
  }
  public reject()
  {
    this.empserve.rejectStatus(this.x.appId,this.x).subscribe(data=>this.x=data);
    window.alert("REQUEST REJECTED !!!");
    this.route.navigate(['student/requests']);
  }

}
