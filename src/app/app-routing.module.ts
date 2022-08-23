import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './student-module/forbidden/forbidden.component';
import { LoginFormComponent } from './student-module/login-form/login-form.component';
import { RegistrationFormComponent } from './student-module/registration-form/registration-form.component';
import { ScholarshipFormComponent } from './student-module/scholarship-form/scholarship-form.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [


{path : 'login' , component: LoginFormComponent},
{path : 'registration' , component: RegistrationFormComponent},
{path : 'forbidden' , component: ForbiddenComponent},
{path : 'scholarshipForm', component: ScholarshipFormComponent, canActivate:[AuthGuard],data:{roles:['Student']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
