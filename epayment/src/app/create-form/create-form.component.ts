import { Component, OnInit } from '@angular/core';
import { Gender } from '../Gender';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  public genders:Array<Gender>=[{id:0,name:"Choose Gender"},{id:1,name:"Male"},{id:2,name:"Female"},{id:3,name:"Other"}];
  public selectedId:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
