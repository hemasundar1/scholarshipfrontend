import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserModelService {
  PATH_OF_API = "http://localhost:8086";
  requestHeader = new HttpHeaders(
    { "No-Auth" : "True"}
  );

  constructor(private httpClient:HttpClient) { }

public saveUser(data:any){
  return this.httpClient.post(this.PATH_OF_API+"/user/signup",data,{responseType:'text' as 'json', headers: this.requestHeader});

} 
}
