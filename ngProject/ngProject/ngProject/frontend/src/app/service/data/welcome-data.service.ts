import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executehelloWorldBeanService(){
    console.log("Execute Hello World Service");
    return this.http.get('http://localhost:8080/helloworld');
  }



}
