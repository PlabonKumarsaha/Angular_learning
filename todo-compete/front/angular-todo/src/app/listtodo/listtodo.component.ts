import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  listData : string[]=[];

  todos :Todo[]= [];
  message: string='';

  // todos=[
  //   {"id":"1","description":"nachmu"},
  //   {"id":"2","description":"gaimu"}
  // ];
  // todo = {
  //   id: 1,
  //   description : 'This is something',
    
  // }

  
  constructor(private todoservice : TodoDataService,
    private route: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.todoservice.retriveAllTodos('abc').subscribe(
      response =>{
        console.log("response ",response);
        this.todos= response;
      }
     );
  }
  deleteTodos(id:any){
    console.log("id ",id)
    //this.listData.push(id);
    this.todoservice.deleteTodos('PKS',id).subscribe(
      response =>{
        console.log(response)
        this.message = "Sucessfully deleted";
        this.refresh()
      }
    )

  }


  updateTodos(id:number){
    console.log(id)
    this.route.navigate(['todos',id])
  }

  showData(){
    console.log("all data",this.listData);
      }
  addTodo(){
    this.route.navigate(['todos',-1])
  }

}
