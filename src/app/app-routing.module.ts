import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmployeeloginComponent } from './employee-module/employeelogin/employeelogin.component';
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
import { StudentdetailsComponent } from './employee-module/studentdetails/studentdetails.component';
import { StudentsearchComponent } from './employee-module/studentsearch/studentsearch.component';
import { StudentrequestsComponent } from './employee-module/studentrequests/studentrequests.component';
import { EmployeedetailsComponent } from './admin-module/employeedetails/employeedetails.component';
import { AssignrequestComponent } from './admin-module/assignrequest/assignrequest.component';
import { CreateemployeeComponent } from './admin-module/createemployee/createemployee.component';
import { NavBarComponent } from './student-module/nav-bar/nav-bar.component';
import { AssignemployeeComponent } from './admin-module/assignemployee/assignemployee.component';
import { UpdateComponent } from './student-module/update/update.component';
import { ProfileComponent } from './student-module/profile/profile.component';
import { StatusComponent } from './student-module/status/status.component';

const routes: Routes = [


{path : 'login' , component: LoginFormComponent},
{path : 'registration' , component: RegistrationFormComponent},
{path : 'forbidden' , component: ForbiddenComponent},
{path:'student/homepage',component:NavBarComponent},
{path : 'student/scholarshipForm', component: ScholarshipFormComponent, canActivate:[AuthGuard],data:{roles:['Student']}},
{path:'student/update',component:UpdateComponent},
{path:'student/profile',component:ProfileComponent},
{path:'student/status',component:StatusComponent},

{path:'admin/employeelist',component:EmployeelistComponent},
{path:'admin/homepage',component:AdminhomepageComponent},
{path:'admin/login',component:AdminloginComponent},
{path:'employee/details/:id',component:EmployeedetailsComponent},
{path:'employee/update/:id',component:EmployeeupdateComponent},
{path:'employee/assign',component:AssignrequestComponent},
{path:'employee/assign/:id',component:AssignemployeeComponent},
{path:'employee/create',component:CreateemployeeComponent},


{path : 'employee/homepage',component:EmployeehomepageComponent},
{path : 'student/requests',component:StudentrequestsComponent},
{path : 'request/details/:id',component:StudentdetailsComponent},
{path : 'request/search',component:StudentsearchComponent},
{path : 'employee/login',component:EmployeeloginComponent},



{path : '**' ,redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
