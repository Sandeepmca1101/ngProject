import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>Template Added For Testing{{message}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  message='Welcome to the index page';
}
