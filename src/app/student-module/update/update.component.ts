import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/Services/studentService/student-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  scholarDetails= null;
  value:any;
  scholarToUpdate={
    appId:"",
    firstName:"",
    lastName:"",
    postalAddress:"",
    state:"",
    className:"",
    collegeName:"",
    status:"",

  };
  currentUser:any;
  constructor(private studentService: StudentServiceService,private router:Router) {
    this.getScholarDetails();
    
   }
  

  getScholarDetails(){
    this.studentService.getAllrequests().subscribe(data=>{this.scholarDetails=data});

      
  }
  edit(scholar:any){
    this.scholarToUpdate = scholar;
    console.log(this.scholarToUpdate,scholar);
  }
  updateScholar(){
    this.value=window.confirm("Do you want update SURELY ?");
    if(this.value==true)
    {
    this.studentService.updatestudent(this.scholarToUpdate).subscribe(data=>{this.scholarToUpdate=data});
    }
    window.location.reload();
  }



  ngOnInit(): void {
    this.studentService.getCurrentUser().subscribe(data=>{this.currentUser=data});
  }


}
