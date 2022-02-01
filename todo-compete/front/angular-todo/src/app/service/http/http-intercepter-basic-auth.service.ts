import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationServiceService } from '../basic-authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuth : BasicAuthenticationServiceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler):any {

     let username = "user"
     let password = "password"
    //  let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password);
    //  console.log("basicAuthHeaderString : ",basicAuthHeaderString)
    let basicAuthHeaderString = "Basic "+window.btoa(this.basicAuth.getAuthenticatedUSer()+":"+this.basicAuth.getAuthenticatedPassword());
    console.log("basicAuthHeaderString : ",basicAuthHeaderString)

    let userName = this.basicAuth.getAuthenticatedUSer()
    //"Basic "

    if(basicAuthHeaderString && userName){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
