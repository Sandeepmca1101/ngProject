import { BasicAuthenticationService } from './../basic-authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthServiceService implements HttpInterceptor {

  constructor(private basicAuthenticationService:BasicAuthenticationService) {
  }

  intercept(request:HttpRequest<any>, next:HttpHandler) {
    console.log("Interceptor Classss=================="+sessionStorage.getItem('token'))
    //let username = 'ok'
    //let password = '1'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    sessionStorage.getItem('authenticateUser');
     let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticateToken();
     let username = this.basicAuthenticationService.getAuthenticateUser();
    console.log("Interceptor Classss=================="+basicAuthHeaderString+"===="+username);
    if (basicAuthHeaderString && username) {
      request = request.clone({     //can't modify request obj
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
