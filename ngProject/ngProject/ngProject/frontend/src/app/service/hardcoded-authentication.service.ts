import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,psw) {
    console.log('before' + this.isUserLoggedIn());
    if ((username === "ok" || username === "admin") && psw === "1") {
      sessionStorage.setItem('authenticateUser', username);
      console.log('After' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
      isUserLoggedIn(){
      let user =sessionStorage.getItem('authenticateUser')
      return !(user===null)
    }
  logout(){
    sessionStorage.removeItem('authenticateUser')
  }

}
