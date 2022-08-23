import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

 
  public setUserId(userId:any){
    localStorage.setItem("userId",userId);
  }
  public getUserId(){
     return localStorage.getItem("userId");
  }

  public setUserEmail(email:any){
    return localStorage.setItem("emailId",email);
  }

  public getUserEmail(){
    return localStorage.getItem("emailId");
  }


  public setRoles(roles:string){
    localStorage.setItem("roles",(roles));
  }

  // JSON.stringify

  public  getRoles():string{
    return (localStorage.getItem('roles') || '{}');
  }
  // JSON.parse

  public setToken(jwtToken: string){
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken() :string{
    return (localStorage.getItem('jwtToken')   || '{}');
  }

  public clear(){
    localStorage.clear();
  }
  public isLoggedIn() {
    return (this.getRoles() && this.getToken());
  }
}
