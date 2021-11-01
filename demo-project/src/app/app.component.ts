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
  myEvent(evt:any) {
    console.warn(evt)
  }
  currentValue = "";

  getVal(val:string) {
    console.warn(val);
    this.currentValue =val;
    console.log(this.currentValue)
  }

  data = ['Plabon','Mas','Anik','Sojib'];

  details =[{
    'name' : 'Plabon',
    'Job':'SE'
  },
{
  'name':'Mash',
  'Job' :'Law'
},
{
  'name':'Anik',
  'Job':'IPE'
},
{
  'name':'Sajib',
  'Job' :'network'
}]
  
}
