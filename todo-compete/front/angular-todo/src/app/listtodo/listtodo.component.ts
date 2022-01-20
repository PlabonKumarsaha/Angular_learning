import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(public id : number,
    public description: string,
    public done:boolean,
    public targetDate : Date){

  }
}
@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})


export class ListtodoComponent implements OnInit {

  todos :Todo[]= [];

  // todos=[
  //   {"id":"1","description":"nachmu"},
  //   {"id":"2","description":"gaimu"}
  // ];
  // todo = {
  //   id: 1,
  //   description : 'This is something',
    
  // }

  
  constructor(private todoservice : TodoDataService) { }

  ngOnInit(): void {
     this.todoservice.retriveAllTodos('abc').subscribe(
     response =>{
       console.log("response ",response);
       this.todos= response;
     }
    );
  }

}
