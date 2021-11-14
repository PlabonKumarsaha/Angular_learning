import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PayServiceService {

   private baseUrl ="http://10.11.201.169:8080/epaymentApi/v1/api/server";
   private getDataUrl = "10.11.201.169:8080/epaymentApi/v1/api/loginSubmit?userid=";
  //private baseUrl="localhost:8088/epaymentApi/v1/api/server"


  constructor(private httpClient : HttpClient) { }

  getValue():Observable<any>{
    console.log('base URL'+this.baseUrl);
    return this.httpClient.get<any>(`${this.baseUrl}`);
  }

  getData(userid: string,password: any ):Observable<any>{
    console.log('base URL'+this.getDataUrl);
    console.log( "uname "+userid, "pass = ",password);
    return this.httpClient.post<any>(`${this.getDataUrl}=${userid}&password=${password}`,'');
  }

  
}
