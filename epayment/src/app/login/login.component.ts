import { Component, OnInit } from '@angular/core';
import { PayServiceService } from '../pay-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val:string="default value";

  constructor(private payServiceService:PayServiceService) { }

  ngOnInit(): void {
    this.getServiceCall();
    console.log('The resturn value is ',this.val);
  }

  getServiceCall() {
    console.log('Service called');
    this.payServiceService.getValue().subscribe(data =>
      {
        console.log("data",data)
        this.val=data;
      })
  }

}
