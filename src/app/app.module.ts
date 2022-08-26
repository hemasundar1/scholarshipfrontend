import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegistrationFormComponent } from './student-module/registration-form/registration-form.component';
import { LoginFormComponent } from './student-module/login-form/login-form.component';
import { ScholarshipFormComponent } from './student-module/scholarship-form/scholarship-form.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForbiddenComponent } from './student-module/forbidden/forbidden.component';
import{RouterModule} from '@angular/router';
import { NavBarComponent } from './student-module/nav-bar/nav-bar.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { LoginService } from './Services/loginService/login.service';
import { EmployeerequestsComponent } from './employee-module/studentrequests/employeerequests.component';

import { EmployeedetailsComponent } from './employee-module/studentdetails/employeedetails.component';
import { EmployeesearchComponent } from './employee-module/studentsearch/employeesearch.component';
import { EmployeeloginComponent } from './employee-module/employeelogin/employeelogin.component';
import { AdminhomepageComponent } from './admin-module/adminhomepage/adminhomepage.component';
import { EmployeeupdateComponent } from './admin-module/employeeupdate/employeeupdate.component';
import { EmployeelistComponent } from './admin-module/employeelist/employeelist.component';
import { EmployeehomepageComponent } from './employee-module/employeehomepage/employeehomepage.component';
import { AdminloginComponent } from './admin-module/adminlogin/adminlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    ScholarshipFormComponent,
    ForbiddenComponent,
    NavBarComponent,
    EmployeerequestsComponent,
    EmployeehomepageComponent,
    EmployeedetailsComponent,
    EmployeesearchComponent,
    EmployeeloginComponent,
    AdminhomepageComponent,
    EmployeeupdateComponent,
    EmployeelistComponent,
    AdminloginComponent
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule


  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
