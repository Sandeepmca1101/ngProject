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
    this.welcomeDataService.executehelloWorldBeanService().subscribe();
  }

}

 class TestClass {

}
