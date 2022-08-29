import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/employee-module/classes/user-model';
import { AdminserviceService } from 'src/app/Services/adminService/adminservice.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  employee: UserModel=new UserModel();
  submitted = false;

  constructor(private adminservice: AdminserviceService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
  }

  save() {
    this.adminservice
    .createEmployee(this.employee).subscribe((data: any) => {
      console.log(this.employee);
      this.gotoList();
    }, 
      (error: any) => console.log(error));

      console.log(this.employee);
  }

  onSubmit() {
    console.log(this.employee.password, this.employee.confirmPassword);
    if(this.employee.password === this.employee.confirmPassword) {
      this.submitted = true;
      console.log("pass in sumbit");
      this.save();

    } else {
      this.submitted = false;
      console.log("fail in sumbit");
    }
        
  }

  gotoList() {
    this.router.navigate(['admin/employeelist']);
  }

}
