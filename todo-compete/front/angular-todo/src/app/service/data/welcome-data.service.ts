import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


export class HelloWorld{
  constructor(public message : string){
    
  }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeDataService {

  constructor(private httpclient :HttpClient ) { }
  executeHellowWorldBeanService(){
    return this.httpclient.get<HelloWorld>('http://localhost:8809/hello');
  }

  executeHellowWorldBeanServiceWithParam(name: string){
    // let basicHeaderString = this.createBasicAuthHeader()

    // let headers = new HttpHeaders({
    //   Authorization : basicHeaderString
    // })
    return this.httpclient.get<HelloWorld>(`http://localhost:8809/hello/${name}`);
    
   //, {headers});
  }

  // createBasicAuthHeader(){
  //   let username = "user"
  //   let password = "password"
  //   let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password);
  //   return basicAuthHeaderString;
  // }
}
