import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworld/${name}`);
  }
}
