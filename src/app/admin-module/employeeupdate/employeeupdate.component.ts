import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from 'src/app/Services/adminService/adminservice.service';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {

  userId:number;
  employee:any;
  submitted = false;
  value:any;

  constructor(private route: ActivatedRoute,private router: Router,
    private adminserve: AdminserviceService) { }

  ngOnInit() {
    //this.employee = new Employee();

    this.userId = this.route.snapshot.params['id'];
    
    this.adminserve.getEmployee(this.userId)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee(employee:any) {
    this.adminserve.updateEmployee(employee.userId,employee).subscribe(data=>{this.employee=data});
  }

  onSubmit(employee:any) {
    this.value = window.confirm("Do you want to update! id: " + this.userId);
    if(this.value == true) {
      this.submitted = true;
    this.updateEmployee(employee); 
    
    }   
      this.gotoList();
  }

  gotoList() {
    this.router.navigate(['admin/employeelist']);
  }

}
