import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateComponent } from 'src/app/student-module/update/update.component';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private baseURL="http://localhost:8086/employee/"
  private getCurrentuser="http://localhost:8086/current-employee"
  private allrequestsdocuments=this.baseURL+"documents"
  private allrequests=this.baseURL+"requests"
  private update="http://localhost:8086/request/student"
  private profile="http://localhost:8086/student/updateStudent";
  constructor(private http:HttpClient) { }

  getCurrentUser():Observable<any>{
    return this.http.get<any>(`${this.getCurrentuser}`);
  }

  updatestudent(value:any):Observable<any>
  {
    return this.http.put<any>(`${this.update}`,value);
  }
  getAlldocuments():Observable<any>
  {
    return this.http.get<any>(`${this.allrequestsdocuments}`);
  }
  getAllrequests():Observable<any>{
    return this.http.get<any>(`${this.allrequests}`);
  }

  updateProfile(value:any):Observable<any>
  {
    return this.http.put<any>(`${this.profile}`,value);
  }

}
