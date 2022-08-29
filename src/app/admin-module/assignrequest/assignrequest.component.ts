import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationDetails } from 'src/app/employee-module/classes/application-details';
import { UserModel } from 'src/app/employee-module/classes/user-model';
import { AdminserviceService } from 'src/app/Services/adminService/adminservice.service';

@Component({
  selector: 'app-assignrequest',
  templateUrl: './assignrequest.component.html',
  styleUrls: ['./assignrequest.component.css']
})
export class AssignrequestComponent implements OnInit {
  requests:any;
  employee:any;
  
  constructor(private router: Router,
    private adminserve:AdminserviceService) { }

  ngOnInit(): void {
   // window.location.reload();
    this.reloadData()
  }

  reloadData() {
    
    this.adminserve.getrequest().subscribe(data=>{console.log(data),this.requests=data});
    this.adminserve.getEmployeesList().subscribe(data=>{console.log(data),this.employee=data});
  }

  goTo(id:any)
  {
    this.router.navigate(['employee/assign',id]);
  }

  /*assign(appId:number,value:number)
  {
   // this.requests[appId].assinged=this.valueId;
   // console.log(this.valueId);
   for(let i of this.requests)
   {
      if(i.appId==appId)
      {
        this.sendValue=i;
        //this.sendValue.assinged=this.valueId;
        console.log("value is ",this.valueId);
      }
   }
    this.adminserve.assign(appId,this.requests[0]);
    console.log("In assign method appId and send value",appId,this.requests[0]);
    console.log("In assign method requests value is ",this.requests);
  }*/

  gotoList(){
    this.router.navigate(['admin/employeelist']);
  }

}
