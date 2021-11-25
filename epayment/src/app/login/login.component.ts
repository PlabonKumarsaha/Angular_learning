import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PayServiceService } from '../pay-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val:string="default value";
  output:string="default value";
  public user={
    userid: ''
    ,password: ''
  }

  constructor(private payServiceService:PayServiceService
    ,private http:HttpClient,
    private router : Router) { }

  ngOnInit(): void {
    this.getServiceCall();
    console.log('The resturn value is ',this.val);
  }

  getServiceCall() {
    console.log('Service called');
     
    this.payServiceService.getValue().subscribe((data:any) =>
      {
       // console.log("data",JSON.stringify(data))
       //this.val=JSON.stringify(data);
        //this.val= data;
        // const myObj = JSON.parse(data);
        // console.log("data==>",myObj);
        //  this.val= myObj.responseCode;
      //  console.log({data});
        console.log(data.responseCode);
        this.val=data.responseCode+"-"+data.responseMessage;
        
        
      })
      console.log("end")
  }

  login(){
    this.router.navigate(['payment'])
    
     this.payServiceService.getData(this.user.userid,this.user.password).subscribe(data =>{
       console.log(data);
       this.output=data;
     })

  }

}
