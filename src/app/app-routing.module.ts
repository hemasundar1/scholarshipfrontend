import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employee-module/employeedetails/employeedetails.component';
import { EmployeehomepageComponent } from './employee-module/employeehomepage/employeehomepage.component';
import { EmployeeloginComponent } from './employee-module/employeelogin/employeelogin.component';
import { EmployeerequestsComponent } from './employee-module/employeerequests/employeerequests.component';
import { EmployeesearchComponent } from './employee-module/employeesearch/employeesearch.component';
import { ForbiddenComponent } from './student-module/forbidden/forbidden.component';
import { LoginFormComponent } from './student-module/login-form/login-form.component';
import { RegistrationFormComponent } from './student-module/registration-form/registration-form.component';
import { ScholarshipFormComponent } from './student-module/scholarship-form/scholarship-form.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [


{path : 'login' , component: LoginFormComponent},
{path : 'registration' , component: RegistrationFormComponent},
{path : 'forbidden' , component: ForbiddenComponent},
{path : 'scholarshipForm', component: ScholarshipFormComponent, canActivate:[AuthGuard],data:{roles:['Student']}},
{path : 'employee/homepage',component:EmployeehomepageComponent},
{path : 'employee/requests',component:EmployeerequestsComponent},
{path : 'employee/details/:id',component:EmployeedetailsComponent},
{path : 'employee/search',component:EmployeesearchComponent},
{path : 'employee/login',component:EmployeeloginComponent},
{path : '**' ,redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
