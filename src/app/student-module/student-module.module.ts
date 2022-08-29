import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule } from './student-module-routing.module';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudenthomepageComponent } from './studenthomepage/studenthomepage.component';


@NgModule({
  declarations: [
    ApplicationFormComponent,
    NavBarComponent,
    StudenthomepageComponent
  ],
  imports: [
    CommonModule,
    StudentModuleRoutingModule
  ]
})
export class StudentModuleModule { }
