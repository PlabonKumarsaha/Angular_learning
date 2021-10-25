import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ntitle:string='Nav title';

  constructor() { }

  ngOnInit(): void {
  }

}
