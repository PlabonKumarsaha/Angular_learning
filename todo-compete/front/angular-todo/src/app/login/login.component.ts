import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username)
    if(this.username === 'pks' && this.password ==='abc'){
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin = true;
    }
  }

}
