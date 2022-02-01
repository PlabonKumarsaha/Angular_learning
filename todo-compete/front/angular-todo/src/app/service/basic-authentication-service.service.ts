import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorld } from './data/welcome-data.service';
import { map, catchError } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const USERNAME = 'authenticaUserName';
export const PASSWORD = 'authenticaPassword';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor(private httpclient :HttpClient) { }

  authenticate(username: string,password: string){
    console.log("before logged in "+this.isUserAuthenticated())
    if(username === 'pks' && password ==='abc'){
      sessionStorage.setItem(USERNAME,username);
      sessionStorage.setItem(PASSWORD,password);
      console.log("after logged in "+this.isUserAuthenticated())
      return true;
    }else{
      return false
    }
  }

  executeHellowWorldBeanService(){
    return this.httpclient.get<AuthenticatinBean>(`${API_URL}/basicauth`);
    // return this.httpclient.get<AuthenticatinBean>('http://localhost:8809/basicauth');
  }

  executeBasicAuthenticationService(username : string, password : string){
    // username = "user"
    // password = "password"
    let basicHeaderString = this.createBasicAuthHeader(username , password);

    let headers = new HttpHeaders({
      Authorization : basicHeaderString
    })
    return this.httpclient.get<AuthenticatinBean>(`${API_URL}/basicauth`,
    {headers}).pipe(
      map(
       (data:any) =>{
          sessionStorage.setItem(USERNAME,username);
          sessionStorage.setItem("token",basicHeaderString);
          sessionStorage.setItem(PASSWORD,password);
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
    sessionStorage.removeItem(USERNAME);
    sessionStorage.removeItem(PASSWORD);
    sessionStorage.removeItem(TOKEN);

  }

  createBasicAuthHeader(username : string, password : string){
    // let username = "user"
    // let password = "password"
    let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password);
    return basicAuthHeaderString;
  }

  getAuthenticatedUSer(){
    let user = sessionStorage.getItem(USERNAME)
   // return !(user === null)
   return user;
  }

  getAuthenticatedPassword(){
    let pass = sessionStorage.getItem(PASSWORD)
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
