import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorld } from './data/welcome-data.service';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor(private httpclient :HttpClient) { }

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

  executeHellowWorldBeanService(){
    return this.httpclient.get<AuthenticatinBean>('http://localhost:8809/basicauth');
  }

  executeBasicAuthenticationService(username : string, password : string){
    // username = "user"
    // password = "password"
    let basicHeaderString = this.createBasicAuthHeader(username , password);

    let headers = new HttpHeaders({
      Authorization : basicHeaderString
    })
    return this.httpclient.get<AuthenticatinBean>(`http://localhost:8809/basicauth`,
    {headers}).pipe(
      map(
       (data:any) =>{
          sessionStorage.setItem("authenticaUserName",username);
          sessionStorage.setItem("token",basicHeaderString);
          sessionStorage.setItem("authenticaPassword",password);
          return data
        }
      )
    );
  }

  isUserAuthenticated(){
    let user = sessionStorage.getItem("authenticaUserName");
    return !(user == null);
  }

  logout(){
    sessionStorage.removeItem("authenticaUserName");
    sessionStorage.removeItem("token");

  }

  createBasicAuthHeader(username : string, password : string){
    // let username = "user"
    // let password = "password"
    let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password);
    return basicAuthHeaderString;
  }

  getAuthenticatedUSer(){
    let user = sessionStorage.getItem("authenticaUserName")
   // return !(user === null)
   return user;
  }

  getAuthenticatedPassword(){
    let pass = sessionStorage.getItem("authenticaPassword")
   return pass;
  }


  getAuthenticatedToken(){
    console.log("session log ",sessionStorage.getItem("token"))
      return sessionStorage.getItem("token")
  }


}

export class AuthenticatinBean{
constructor(public message : string){

}
}
