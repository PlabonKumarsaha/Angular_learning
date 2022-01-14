import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedServicesService } from '../service/hard-coded-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "something";
  password = "";
  errMessage = "Invalid credentials";
  invalidLogin = false;

  constructor(private router : Router,
    private hardcodeAuth : HardCodedServicesService) { }

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

}
