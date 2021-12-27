import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.css']
})
export class ListtodoComponent implements OnInit {

  todos=[
    {"id":"1","description":"nachmu"},
    {"id":"2","description":"gaimu"}
  ];
  // todo = {
  //   id: 1,
  //   description : 'This is something',
    
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
