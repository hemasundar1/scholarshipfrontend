import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {
  value:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.value=window.confirm("DO you want to logOut :] ?");
    if(this.value==true){
    this.router.navigate(['login']);}
  }

}
