import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName :string='';
  constructor(private actiavtedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.actiavtedRoute.snapshot.params['name'];
  }

}
