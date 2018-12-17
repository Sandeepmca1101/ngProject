import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http:HttpClient) {
  }

  authenticate(username, psw) {
    console.log('before' + this.isUserLoggedIn());
    if ((username === "ok" || username === "admin") && psw === "1") {
      sessionStorage.setItem('authenticateUser', username);
      console.log('After' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  executeAuthService(username, password) {
    console.log("Basic Auth Service" +username+password);

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthHeaderString);
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers: headers}).pipe(
      map(
          data => {
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
  }

  getAuthenticateUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticateToken(){
    if(this.getAuthenticateUser())
      return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser')
    sessionStorage.removeItem('token')
  }

}
export class AuthenticationBean {
  constructor(public message:string) {
  }
}
