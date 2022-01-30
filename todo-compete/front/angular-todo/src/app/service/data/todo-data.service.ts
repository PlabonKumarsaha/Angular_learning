import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/listtodo/listtodo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  retriveAllTodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8809/users/${username}/todos`)
  }
  deleteTodos(username:string,id:number){
    return this.http.delete(`http://localhost:8809/users/${username}/todos/${id}`)
  }

  retriveTodo(username:string,id:number){
    return this.http.get<Todo>(`http://localhost:8809/users/${username}/todos/${id}`)
  }

  updateTodo(username:string,id:number,todo:any){
    return this.http.put(`http://localhost:8809/users/${username}/todos/${id}`,todo)
  }

  createTodo(username:string,todo:any){
    console.log("create todo",todo)
    return this.http.post(`http://localhost:8809/users/${username}/todos`,todo)
  }
}
