import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Todo } from '../listtodo/listtodo.component';

import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number = -1;
  todo : Todo = new Todo(-1,'',true,new Date());

  constructor(private todoService : TodoDataService,
    private aroute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];

    //console.log("dis.id",this.id)
    if(this.id != -1){
      this.saveTodo(this.id)
    }
   
  }
    
  saveTodo(id:number){
    this.todoService.retriveTodo('PKS',id).subscribe(
      response =>{
        console.log(response)
        this.todo=response
        console.log("tod ",this.todo)
      } 
    )
    console.log("res ",this.todo);
  }

  saveTodoRest(){
    console.log("in save todo id : ",this.id)
    if(this.id === -1){

      this.todoService.createTodo('PKS',this.todo)
      .subscribe(data=>{
        console.log("created ",data)
        this.router.navigate(['todos'])
      })
    }else{
      console.log( "the todo ",this.todo)
      this.todoService.updateTodo('PKS',this.id,this.todo)
      .subscribe(data=>{
        console.log("update ",data)
        this.router.navigate(['todos'])
      })
    }
  }
 


}
