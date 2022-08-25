import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {


  PATH_OF_API = "http://localhost:8086";
  constructor(private httpClient:HttpClient) { }

public saveApp(data:any){
  return this.httpClient.post("http://localhost:8086/appDetails",data,{responseType:'text' as 'json'});
} 
public saveDoc(id:any,data:any){
  return this.httpClient.post(this.PATH_OF_API+"/docDetails?id="+id,data,{responseType:'text' as 'json'});
}


public uploadImage(fileData:any,firstName:any,lastName:any,collegeName:any,state:any,postalAddress:any,className:any,studentId:number){

  const httpParams = new HttpParams({
    fromObject: {
      firstName : firstName,
      lastName:lastName,
      collegeName:collegeName,
      state:state,
      postalAddress:postalAddress,
      className:className,
      studentId:studentId

    }
  });
  return this.httpClient.post(this.PATH_OF_API+"/uploadFile",fileData, {params:httpParams,responseType:'text'});
}
}
