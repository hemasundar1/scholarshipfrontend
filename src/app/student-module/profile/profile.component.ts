import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/studentService/student-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:any;
  studentToUpdate:any;
  value:any;
  constructor(private studentserve:StudentServiceService){ }
   

  ngOnInit(): void {
    this.studentserve.getCurrentUser().subscribe(data=>{this.currentUser=data});
  }
  updateProfile(student:any){
    this.studentToUpdate = student;
    console.log(this.studentToUpdate.email);
  }
  updateStudent()
  {
    this.value=window.confirm("Do you want to edit for SURE ?");
    if(this.value==true)
    {
    this.studentserve.updateProfile(this.studentToUpdate).subscribe(data=>{this.studentToUpdate=data});
    }
    window.location.reload();
  }

}
