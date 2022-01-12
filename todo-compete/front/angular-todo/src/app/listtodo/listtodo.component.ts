import { Component, OnInit } from '@angular/core';

export class Todos{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {

  todos=[
    new Todos(1,"Learn to dance",false,new Date()),
    new Todos(2,"Learn Angular",true,new Date()),
    new Todos(3,"Learn Django",false,new Date()),

  ];
  // todo = {
  //   id: 1,
  //   description : 'This is something',
    
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
