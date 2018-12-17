import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { BasicAuthenticationService }     from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='ok'
  psw=''
  error='Invalid Credentials'
  invalidlogin=false
  //Angular.Give me Router
  //
  constructor(private router :Router,
              private hardcodedAuthenticationService:HardcodedAuthenticationService,
              private basicAuthenticationService:BasicAuthenticationService
  ){}

  ngOnInit() {}
  handleLogin(){
    //if(this.username==="ok" && this.psw==="1"){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.psw)){
      this.router.navigate(['welcome',this.username])
      this.invalidlogin=false
    }
    else{
      this.invalidlogin=true
    }
    console.log(this.username);
    console.log(this.psw);
  }
  handleBasicAuthLogin() {
    console.log("BAsic")
    this.basicAuthenticationService.executeAuthService(this.username, this.psw)
      .subscribe(
        data => {
          console.log("data")
          console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidlogin = false
      },
        error => {
        console.log(error)
        this.invalidlogin = true
      }
    )
  }

}
