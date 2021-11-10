import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PayServiceService {

   private baseUrl ="http://10.11.201.169:8080/epaymentApi/v1/api/server";
  //private baseUrl="localhost:8088/epaymentApi/v1/api/server"


  constructor(private httpClient : HttpClient) { }

  getValue():Observable<string>{
    console.log('base URL'+this.baseUrl);
    return this.httpClient.get<string>(`${this.baseUrl}`);
  }

  
}
