import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModelService } from 'src/app/Services/UserService/user-model.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  constructor(private userModelService:UserModelService) { }

  ngOnInit(): void {
  }

  RegistrationPage= new FormGroup({
    userName: new FormControl('',Validators.required),
   
    email: new FormControl('',Validators.required),
    mobileNumber: new FormControl('',Validators.required),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$')]),
    userRole: new FormControl('Student',[Validators.required])
  });

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
    else{
      this.userModelService.saveUser(this.RegistrationPage.value).subscribe(
        (response:any) => {
          console.log(response);
          console.warn(this.RegistrationPage.value);
          alert('Thank You for Registration');
          
    }
      )
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

  get confirmPassword(){
    return this.RegistrationPage.get('confirmPassword');
  }

  get userName(){
    return this.RegistrationPage.get('userName');
  }

}
