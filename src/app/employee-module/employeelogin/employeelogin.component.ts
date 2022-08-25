import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  a:any;
  b:any;
  add:any;
  max:number=9;
  entervalue:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  captcha()
  {
    this.a=Math.floor(Math.random() * (this.max + 1));
    this.b=Math.floor(Math.random()* (this.max + 1));
    console.log(this.a,this.b);
    this.add=prompt("enter the addition of "+this.a+" + "+this.b);
    this.entervalue=parseInt(this.add);
    if((this.a+this.b)==(this.add)){
    this.route.navigate(['employee/homepage']);
    }
    else{
      window.alert("Enter correct Addition value");
    }
  }
  onClick1()
  {
    this.route.navigate(['login']);
  }

}
