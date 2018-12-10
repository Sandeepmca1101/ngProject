import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message="SomeWelcomeMEsg"
  name= ''
  welcomeMesgFromService:string
  welcomeNameFromService=''
  errorFromService=''
  constructor(public route:ActivatedRoute,private welcomeDataService:WelcomeDataService) {

  }

  ngOnInit() {
    console.log(this.message)
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }
  onclickButton(){
    console.log("Welcome customized message ");
    //console.log(this.welcomeDataService.executehelloWorldBeanService());
    this.welcomeDataService.executehelloWorldBeanService().subscribe(
     // response => this.handleSuccessfulResponse(response)
        //response => console.log(response.message)
      response => this.handleSuccessfulResponse(response),
      error=>this.handleError(error)
    );
    console.log('lastline from welcome component');
  }
  onclickButtonWithParam(){
    this.welcomeDataService.executehelloWorldBeanServiceWithParam(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error=>this.handleError(error)
    );
  }
  handleSuccessfulResponse(response){
    this.welcomeMesgFromService= response.message
    this.welcomeNameFromService= response.name
    console.log(response);
    console.log(response.message+ response.name);
  }
  handleError(error){
    //console.log(error);
    console.log(error.error.message);
    this.errorFromService= error.error.message;
  }



}

 class TestClass {

}
