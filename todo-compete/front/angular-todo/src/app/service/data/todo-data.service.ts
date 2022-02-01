import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/listtodo/listtodo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  retriveAllTodos(username: string){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  }
  deleteTodos(username:string,id:number){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  retriveTodo(username:string,id:number){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username:string,id:number,todo:any){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`,todo)
  }

  createTodo(username:string,todo:any){
    console.log("create todo",todo)
    return this.http.post(`${API_URL}/users/${username}/todos`,todo)
  }

  createBasicAuthHeader(){
    let username = "user"
    let password = "password"
    let basicAuthHeaderString = "Basic "+window.btoa(username+":"+password);
    return basicAuthHeaderString;
  }
}
