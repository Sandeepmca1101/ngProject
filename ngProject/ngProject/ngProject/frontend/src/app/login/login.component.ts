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
   constructor(private router :Router) { }

  ngOnInit() {
  }
  handleLogin(){
   if(this.username==="ok" && this.psw==="1"){
     this.router.navigate(['welcome',this.username])
     this.invalidlogin=false
   }
    else{
     this.invalidlogin=true
   }
    console.log(this.username);
    console.log(this.psw);
  }

}
