import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/Services/adminService/adminservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees: any;
  value: any;

  constructor(private adminserve: AdminserviceService,
    private router: Router) {}

  ngOnInit() {
   this.reloadData();
  }

  private reloadData() {
    this.adminserve.getEmployeesList().subscribe(data=>{console.log(data),this.employees=data});
  }

  deleteEmployee(id: number) {
    this.value = window.confirm("Do you want to delete? id: " + id);
    if(this.value === true) {
      this.adminserve.deleteEmployees(id).subscribe(data=>{this.employees=data});
      window.location.reload();
      this.router.navigate(['admin/employeelist']);
    }
  }

  employeeDetails(id: number){
    this.router.navigate(['employee/details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['employee/update', id]);
  }
}
