import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private aroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    //console.log("dis.id",this.id)
    this.saveTodo(this.id)
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

}
