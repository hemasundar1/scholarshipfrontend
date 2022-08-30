import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModelService } from 'src/app/Services/UserService/user-model.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  constructor(private userModelService:UserModelService,private router:Router) { }
  a:any;
  b:any;
  add:any;
  max:number=9;
  entervalue:any;

  ngOnInit(): void {
  }

  RegistrationPage= new FormGroup({
    userName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mobileNumber: new FormControl('',Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$')]),
    //confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$')]),
    userRole: new FormControl('Student',[Validators.required])
  }
  );

  register(){
    if(this.RegistrationPage.invalid){
      this.RegistrationPage.markAllAsTouched();
      return;
    }
    else{

    }
    console.warn(this.RegistrationPage.value);
  }

  public onAddUser(data:any){
    if(this.RegistrationPage.invalid){
      this.RegistrationPage.markAllAsTouched();
      return;
    }
    else {
      this.a=Math.floor(Math.random() * (this.max + 1));
    this.b=Math.floor(Math.random()* (this.max + 1));
    console.log(this.a,this.b);
    this.add=prompt(" CAPTCHA : enter the addition of "+this.a+" + "+this.b);
    this.entervalue=parseInt(this.add);
    if((this.a+this.b)==(this.add)){
      this.userModelService.saveUser(this.RegistrationPage.value).subscribe(
        (response:any) => {
          console.log(response);
          console.warn(this.RegistrationPage.value);
          alert('Thank You for Registration');
          this.router.navigate(['login']);
         })
    }
    else{
      window.alert("Enter correct Addition value");
    }
      
  }


  }

  get userRole(){
    return this.RegistrationPage.get('userRole');
  }

  get email(){
    return this.RegistrationPage.get('email');
  }
  get  mobileNumber(){
    return this.RegistrationPage.get('mobileNumber');
  }

  get password(){
    return this.RegistrationPage.get('password');
  }

 /* get confirmPassword(){
    return this.RegistrationPage.get('confirmPassword');
  }*/

  get userName(){
    return this.RegistrationPage.get('userName');
  }

}
