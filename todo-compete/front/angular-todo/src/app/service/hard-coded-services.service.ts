import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedServicesService {

  constructor() { }

  authenticate(username: string,password: string){
    console.log("before logged in "+this.isUserAuthenticated())
    if(username === 'pks' && password ==='abc'){
      sessionStorage.setItem("authenticaUserName",username);
      sessionStorage.setItem("authenticaPassword",password);
      console.log("after logged in "+this.isUserAuthenticated())
      return true;
    }else{
      return false
    }
  }

  isUserAuthenticated(){
    let user = sessionStorage.getItem("authenticaUserName");
    return !(user == null);
  }

  logout(){
    sessionStorage.removeItem("authenticaUserName");
  }
}
