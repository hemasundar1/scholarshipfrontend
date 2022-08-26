import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employee-module/studentdetails/employeedetails.component';

import { EmployeeloginComponent } from './employee-module/employeelogin/employeelogin.component';
import { EmployeerequestsComponent } from './employee-module/studentrequests/employeerequests.component';
import { EmployeesearchComponent } from './employee-module/studentsearch/employeesearch.component';
import { ForbiddenComponent } from './student-module/forbidden/forbidden.component';
import { LoginFormComponent } from './student-module/login-form/login-form.component';
import { RegistrationFormComponent } from './student-module/registration-form/registration-form.component';
import { ScholarshipFormComponent } from './student-module/scholarship-form/scholarship-form.component';
import { AuthGuard } from './_auth/auth.guard';
import { EmployeelistComponent } from './admin-module/employeelist/employeelist.component';
import { EmployeehomepageComponent } from './employee-module/employeehomepage/employeehomepage.component';
import { AdminhomepageComponent } from './admin-module/adminhomepage/adminhomepage.component';
import { AdminloginComponent } from './admin-module/adminlogin/adminlogin.component';
import { EmployeeupdateComponent } from './admin-module/employeeupdate/employeeupdate.component';

const routes: Routes = [


{path : 'login' , component: LoginFormComponent},
{path : 'registration' , component: RegistrationFormComponent},
{path : 'forbidden' , component: ForbiddenComponent},
{path : 'scholarshipForm', component: ScholarshipFormComponent, canActivate:[AuthGuard],data:{roles:['Student']}},

{path : 'employee/homepage',component:EmployeehomepageComponent},
{path : 'student/requests',component:EmployeerequestsComponent},
{path : 'request/details/:id',component:EmployeedetailsComponent},
{path : 'request/search',component:EmployeesearchComponent},
{path : 'employee/login',component:EmployeeloginComponent},

{path:'admin/employeelist',component:EmployeelistComponent},
{path:'admin/homepage',component:AdminhomepageComponent},
{path:'admin/login',component:AdminloginComponent},
{path:'employee/details/:id',component:EmployeedetailsComponent},
{path:'employee/update/:id',component:EmployeeupdateComponent},

{path : '**' ,redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
