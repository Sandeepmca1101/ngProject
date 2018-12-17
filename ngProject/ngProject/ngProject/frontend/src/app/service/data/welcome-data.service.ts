import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executehelloWorldBeanService(){
    console.log("Execute Hello World Service");
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloworld');
  }
  executehelloWorldBeanServiceWithParam(name){
    console.log("Execute hello WorldBean Service With Param");

    /*let basicAuthHeaderString=this.createBasicAuthenticationHttpHeader();
    let headers =new HttpHeaders({
        Authorization:basicAuthHeaderString
      }) till vid 11*/
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworld/${name}`

      // till vid 11,  { headers : headers}
      );
  }

  /*createBasicAuthenticationHttpHeader() {
       let username = 'user'
       let password = 'password'
       let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
       return basicAuthHeaderString;
     }  till vid 11
  */  //Access to XMLHttpRequest at
    //'http://localhost:8080/hello-world/path-variable/Sandeep'
    //from origin 'http://localhost:4200' has been blocked by CORS policy:
    //No 'Access-Control-Allow-Origin' header is present on the requested resource.

    //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Sandeep' from origin 'http://localhost:4200'
    //has been blocked by CORS policy:
    //Response to preflight request doesn't pass
    //access control check: It does not have HTTP ok status
}
