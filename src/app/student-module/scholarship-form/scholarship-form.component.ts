import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnyForUntypedForms, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScholarshipService } from 'src/app/Services/scholarshipService/scholarship.service';
import { UserAuthService } from 'src/app/Services/userAuth/user-auth.service';

@Component({
  selector: 'app-scholarship-form',
  templateUrl: './scholarship-form.component.html',
  styleUrls: ['./scholarship-form.component.css']
})
export class ScholarshipFormComponent implements OnInit {

  step: any = 1;
  appId: any;
  url_var: any;
  firstName: any;
  lastName: any;
  collegeName: any;
  state: any;
  className: any;
  postalAddress: any;
  studentId:any;
  public userFile: any;
  constructor(private scholarship: ScholarshipService,private userauthservice:UserAuthService,private router:Router) {

    this.studentId=this.userauthservice.getUserId();
    console.log(this.studentId);

  }


  ngOnInit(): void {
  }

  a:any;
  b:any;
  add:any;
  max:number=9;
  entervalue:any;

  ApplicationForm = new FormGroup({
    scholarshipDetails: new FormGroup({

      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern("^[a-zA-Z]+([\\s][a-zA-Z]+)*$")]),
      state: new FormControl(null, [Validators.required]),
      postalAddress: new FormControl(null, [Validators.required, Validators.pattern("^(?:(?:\\+|0{0,2})91(\\$*[\\-]\\$*)?|[0]?)?[789]\\d{9}$"),]),
      collegeName: new FormControl(null, [Validators.required, Validators.email]),
      className: new FormControl(null, [Validators.required]),
    }),
    documentDetails: new FormGroup({
      adharNum: new FormControl(null, [Validators.required]),
      rollNum: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      accountNum: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      branch: new FormControl(null, [Validators.required]),
      ifscNum: new FormControl(null, [Validators.required])
    })

  })
  previous() {
    this.step = 1;
  }

  next() {
    this.step = 2;
  }
  onSelectFile(event: any) {

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.url_var = e.target.result;
      }
    }
    const file = event.target.files[0];
    this.userFile = file;
    console.log(this.userFile);
  }

  // submitted() {

  //   {
  //     console.log(this.ApplicationForm.controls['scholarshipDetails'].value);
  //     this.scholarship.saveApp(this.ApplicationForm.controls['scholarshipDetails'].value).subscribe({
  //       next: (res) => {
  //         this.appId = res;
  //         console.log(res);

  //         this.scholarship.saveDoc(this.appId, this.ApplicationForm.controls['documentDetails'].value).subscribe({
  //           next: (res) => {
  //             console.log(res);
  //             console.log("successfully updated");
  //           }, error(err) {
  //             console.log(err.error);
  //             alert("not updated ");
  //           }
  //         })

  //       }, error(err) {
  //         console.log(err.error);
  //         alert("not Updated application details");
  //       }

  //     }
  //     )
  //   }

  // }

submitted() {
console.log("not working");
     {
      const user = this.ApplicationForm.controls["scholarshipDetails"].value;
      console.log(user);
      const formData = new FormData();
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.collegeName = user.collegeName;
      this.state = user.state;
      this.postalAddress = user.postalAddress;
      this.className = user.className;
//console.log("yaha pahucaha");
//console.log(this.firstName);
      formData.append('file', this.userFile);
      // console.log("formdata h ye",formData);
      this.scholarship.uploadImage(formData, this.firstName, this.lastName, this.collegeName, this.state, this.postalAddress, this.className,this.studentId).subscribe({
        next: (res) => {
          this.appId = res;
         // console.log("doc thak pahucha");
          //console.log(res);
          this.a=Math.floor(Math.random() * (this.max + 1));
    this.b=Math.floor(Math.random()* (this.max + 1));
    console.log(this.a,this.b);
    this.add=prompt(" CAPTCHA : enter the addition of "+this.a+" + "+this.b);
    this.entervalue=parseInt(this.add);
    if((this.a+this.b)==(this.add)){
      this.scholarship.saveDoc(this.appId, this.ApplicationForm.controls['documentDetails'].value).subscribe({
        next: (res) => {
          window.alert("Thank you for Applying the scholarship !! :)");
          this.router.navigate(['student/homepage']);
         // console.log("successfully updated");
        }, error(err) {
          console.log(err);
        }
      })
    }
    else{
      window.alert("Enter correct Addition value");
    }  
        },
        error: (err) => {
          window.alert("Form is already Submmited");
          this.router.navigate(['student/status']);
        }
      })
    }
  }


}
