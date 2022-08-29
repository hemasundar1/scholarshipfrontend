import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private baseUrl = 'http://localhost:8086/employee/';
  private allapplications=this.baseUrl+"requests";
  private allusers="http://localhost:8086/admin/list";

  private employeeUpdate="http://localhost:8086/admin/updateEmployee";
  
  private deleteemployee="http://localhost:8086/admin/delete";
  private assignupdate="http://localhost:8086/request/assign";
  private createemployee="http://localhost:8086/admin/create";
  

  constructor(private http: HttpClient) { }

  
  getEmployeesList(): Observable<any> {
    return this.http.get<any>(`${this.allusers}`);
  }

  getEmployee(userId: number): Observable<any> {
    return this.http.get<any>(`${this.allusers}/${userId}`);
  }

  getrequest():Observable<any>{
    return this.http.get<any>(`${this.allapplications}`);
  }

  getrequests(id:number):Observable<any>{
    return this.http.get<any>(`${this.allapplications}/${id}`);
  }

  assign(appId:number,value:any):Observable<any>
  {
    console.log("assign value in service method ",this.assignupdate,appId,value);

    return this.http.put<any>(`${this.assignupdate}/${appId}`,value);
  }

  createEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.createemployee}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<any> {
    return this.http.put<any>(`${this.employeeUpdate}/${id}`,value);
  }

  deleteEmployees(id: number): Observable<any> {
    console.log("calling delete service method");
    return this.http.delete<any>(`${this.deleteemployee}/${id}`);
  }
}
