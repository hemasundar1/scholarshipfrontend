import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/Services/adminService/adminservice.service';

@Component({
  selector: 'app-assignemployee',
  templateUrl: './assignemployee.component.html',
  styleUrls: ['./assignemployee.component.css']
})
export class AssignemployeeComponent implements OnInit {
  userId:number;
  requests:any;
  submitted = false;
  value:any;
  employee:any;

  constructor(private route: ActivatedRoute,private router: Router,
    private adminserve: AdminserviceService) { }

  ngOnInit() {
    //this.employee = new Employee();

    this.userId = this.route.snapshot.params['id'];
    
    this.adminserve.getrequests(this.userId)
      .subscribe(data => {
        console.log(data)
        this.requests = data;
      }, error => console.log(error));

    this.adminserve.getEmployeesList().subscribe(data=>{this.employee=data});
  }

  assignToEmployee() {
    console.log("we are in .ts file");
    this.adminserve.assign(this.userId, this.requests).subscribe(data=>{this.requests=data});
  }
  onSubmit() {
    this.value = window.confirm("Do you want to assign ? " + this.userId);
    if(this.value == true && this.requests.assigned!=='Select EmployeeId') {
      this.submitted = true;
      
      this.assignToEmployee(); 
    }   
      this.gotoList();
      
  }

  gotoList() {
    this.router.navigate(['/employee/assign']);    
  }

}
