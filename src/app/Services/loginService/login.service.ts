import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserAuthService } from '../userAuth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  PATH_OF_API = "http://localhost:8086";

  requestHeader = new HttpHeaders(
    { "No-Auth" : "True"}
  );


  constructor(private httpclient: HttpClient, private userAuthservice:UserAuthService) { }

  public login(loginData:any){
    return this.httpclient.post(this.PATH_OF_API + "/authenticate",loginData, { headers: this.requestHeader});
  }

  public roleMatch(allowedRoles :any){
    let isMatch =false;
    const userRoles: any = this.userAuthservice.getRoles();
    if(userRoles != null && userRoles ){
    if(userRoles == allowedRoles)  {
      isMatch=true;
      return  isMatch;
    }
    else{
      return isMatch;
    }
    }
  return isMatch;
  }
}
