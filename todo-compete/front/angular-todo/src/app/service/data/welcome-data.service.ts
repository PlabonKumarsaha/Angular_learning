import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpclient :HttpClient ) { }
  executeHellowWorldBeanService(){
    return this.httpclient.get('http://localhost:8809/hello');
  }
}
