import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  arr =['a','b','c'];
  siteUrl = window.location.href;

  obj={
    name:"Plabon",
    age : 20,

  }

  getName() {
    alert("value")
  }
}
