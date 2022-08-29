import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeehomepage',
  templateUrl: './employeehomepage.component.html',
  styleUrls: ['./employeehomepage.component.css']
})
export class EmployeehomepageComponent implements OnInit {

  value:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.value=window.confirm("Do you want to LogOut ?");
    if(this.value==true)
    {
      this.router.navigate(['login']);
    }
  } 
}
