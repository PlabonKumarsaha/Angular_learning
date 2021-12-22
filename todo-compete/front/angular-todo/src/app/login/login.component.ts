import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username)
    if(this.username === 'pks' && this.password ==='abc'){
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }

}
