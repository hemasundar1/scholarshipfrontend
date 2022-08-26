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

  reloadData() {
    this.employees = this.adminserve.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.value = window.confirm("Do you want to delete? id: " + id);
    if(this.value == true) {
      this.adminserve.deleteEmployee(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
    }
  }

  employeeDetails(id: number){
    this.router.navigate(['employee/details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['employee/update', id]);
  }
}
