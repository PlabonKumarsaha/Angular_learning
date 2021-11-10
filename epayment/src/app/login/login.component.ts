import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { PayServiceService } from '../pay-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val:string="default value";

  constructor(private payServiceService:PayServiceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getServiceCall();
    console.log('The resturn value is ',this.val);
  }

  getServiceCall() {
    console.log('Service called');
    this.http.get<JSON>('http://10.11.201.169:8080/epaymentApi/v1/api/server').subscribe(data => {
      console.log('Service called..2');
      var out = JSON.stringify(data);
      console.log("===>>>>"+out);
     // console.log("data",JSON.stringify(data));
  })        
  /*  this.payServiceService.getValue().subscribe(data =>
      {
        console.log("data",data)
        this.val=data;
      })*/
      console.log("end")
  }

}
