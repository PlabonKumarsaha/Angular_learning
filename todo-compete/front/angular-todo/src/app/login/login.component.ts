import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationServiceService } from '../service/basic-authentication-service.service';
import { HardCodedServicesService } from '../service/hard-coded-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "user";
  password = "";
  errMessage = "Invalid credentials";
  invalidLogin = false;

  constructor(private router : Router,
    private hardcodeAuth : HardCodedServicesService,
    private basiAuth : BasicAuthenticationServiceService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username)
    //if(this.username === 'pks' && this.password ==='abc'){
      if(this.hardcodeAuth.authenticate(this.username,this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin = true;
    }
  }

  handleBasicAuthenticationLogin(){
    console.log(this.username)
    //if(this.username === 'pks' && this.password ==='abc'){
      this.basiAuth.executeBasicAuthenticationService(this.username,this.password).subscribe(
        data => {
          console.log(data)
          this.invalidLogin = false;
          this.router.navigate(['welcome',this.username])
        },
        error =>{
          console.log("error",error)
          this.invalidLogin = true;
        }
      )
     
  }

}
