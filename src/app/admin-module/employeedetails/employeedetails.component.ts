import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/Services/adminService/adminservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  userId: any;
  employee: any;

  constructor(private route: ActivatedRoute,private router: Router,
  private amdinserve:AdminserviceService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.loadData();
  }
  private loadData()
  {
    this.amdinserve.getEmployee(this.userId).subscribe(data=>{console.log(data),(this.employee=data)});
  }

  gotoList(){
    this.router.navigate(['admin/employeelist']);
  }

}
