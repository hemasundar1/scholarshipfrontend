import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService/login.service';
import { UserAuthService } from 'src/app/Services/userAuth/user-auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private userauthservice:UserAuthService, private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  loginPage = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$')])

  })

  login(){
    this.loginService.login(this.loginPage.value).subscribe(
      (response: any)=>{
        this.userauthservice.setRoles(response.user.userRole);
        this.userauthservice.setToken(response.jwtToken);
        this.userauthservice.setUserId(response.user.userId);
        this.userauthservice.setUserEmail(response.user.email);
        const role = response.user.userRole;
        if(role=='Admin'){
          this.router.navigate(['admin/homepage']);
        }
        else if(role=='Student'){
          this.router.navigate(['student/homepage']);
        }
        else if(role=='Employee'){
          this.router.navigate(['employee/homepage']);
        }
        console.log(response);
      },(err)=>{
        console.log(err.error);
      }

    );
  }

  get email() {
    return this.loginPage.get('email');
  }
  get password() {
    return this.loginPage.get('password');
  }

}
