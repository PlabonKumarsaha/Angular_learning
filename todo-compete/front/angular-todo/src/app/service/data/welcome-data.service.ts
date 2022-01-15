import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


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
}
