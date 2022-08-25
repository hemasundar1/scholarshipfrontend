import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationDetails } from 'src/app/employee-module/classes/application-details';
import { DocumentDetails } from 'src/app/employee-module/classes/document-details';
import { UserModel } from 'src/app/employee-module/classes/user-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private baseURL="http://localhost:8086/employee/"
 private allrequestsapp=this.baseURL+"requests"
 private allrequestsdocments=this.baseURL+"documents"
 //private documentdetails=this.baseURL+"document"
 private allrequestsusers=this.baseURL+"users"
 
 private request=this.baseURL+"request"
 private approve=this.baseURL+"requestApprove"
 private reject=this.baseURL+"requestReject"
 
  constructor(private http:HttpClient) { }
documentdetailsvalues(appId:any):Observable<DocumentDetails>
{
  return this.http.get<DocumentDetails>(this.baseURL+"document?id="+appId,{responseType:'text' as 'json'});
}

  appliedscholarship():Observable<ApplicationDetails[]>
  {
     return this.http.get<ApplicationDetails[]>(`${this.allrequestsapp}`);
  }
  applieddocuments():Observable<DocumentDetails[]>
  {
    return this.http.get<DocumentDetails[]>(`${this.allrequestsdocments}`);
  }
  appliedusers():Observable<UserModel[]>
  {
    return this.http.get<UserModel[]>(`${this.allrequestsusers}`);
  }
  getDocumentById(id:any):Observable<DocumentDetails>
  {
    return this.http.get<DocumentDetails>(`${this.allrequestsdocments}/${id}`);
  }
  getUserById(id:any):Observable<UserModel>
  {
    return this.http.get<UserModel>(`${this.allrequestsusers}/${id}`);
  }
  getRequestById(id:any):Observable<ApplicationDetails>
  {
    return this.http.get<ApplicationDetails>(`${this.allrequestsapp}/${id}`);
  }
  approveStatus(id:number,approveA:ApplicationDetails)
  {
    //console.log(id,approveA);
    return this.http.put(`${this.approve}/${id}`,approveA);
  }
  rejectStatus(id:number,rejectR:ApplicationDetails)
  {
    return this.http.put(`${this.reject}/${id}`,rejectR);
  }
}
