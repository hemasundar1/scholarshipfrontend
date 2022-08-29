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
import { EmployeeloginComponent } from './employee-module/employeelogin/employeelogin.component';
import { AdminhomepageComponent } from './admin-module/adminhomepage/adminhomepage.component';
import { EmployeeupdateComponent } from './admin-module/employeeupdate/employeeupdate.component';
import { EmployeelistComponent } from './admin-module/employeelist/employeelist.component';

import { EmployeehomepageComponent } from './employee-module/employeehomepage/employeehomepage.component';
import { AdminloginComponent } from './admin-module/adminlogin/adminlogin.component';
import { StudentdetailsComponent } from './employee-module/studentdetails/studentdetails.component';
import { StudentsearchComponent } from './employee-module/studentsearch/studentsearch.component';
import { StudentrequestsComponent } from './employee-module/studentrequests/studentrequests.component';
import { EmployeedetailsComponent } from './admin-module/employeedetails/employeedetails.component';
import { CreateemployeeComponent } from './admin-module/createemployee/createemployee.component';
import { AssignrequestComponent } from './admin-module/assignrequest/assignrequest.component';
import { AssignemployeeComponent } from './admin-module/assignemployee/assignemployee.component';
import { UpdateComponent } from './student-module/update/update.component';
import { ProfileComponent } from './student-module/profile/profile.component';
import { StatusComponent } from './student-module/status/status.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    ScholarshipFormComponent,
    ForbiddenComponent,
    NavBarComponent,
    EmployeehomepageComponent,
    EmployeeloginComponent,
    AdminhomepageComponent,
    EmployeeupdateComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    AdminloginComponent,
    StudentdetailsComponent,
    StudentsearchComponent,
    StudentrequestsComponent,
    CreateemployeeComponent,
    AssignrequestComponent,
    AssignemployeeComponent,
    UpdateComponent,
    ProfileComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],exports:[
    AdminhomepageComponent,
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
