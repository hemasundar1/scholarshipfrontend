import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService/login.service';
import { UserAuthService } from 'src/app/Services/userAuth/user-auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  value=true;
  constructor(private userAuthService: UserAuthService, private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut()
  {
      this.value=window.confirm("Do you want to logOut for SURE ! :( ?");
      if(this.value==true)
      {
        this.router.navigate(['login']);
        this.userAuthService.clear();
      }
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  /*public logout(){
    this.userAuthService.clear();
  }*/

}
