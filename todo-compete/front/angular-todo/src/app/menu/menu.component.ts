import { Component, OnInit } from '@angular/core';
import { HardCodedServicesService } from '../service/hard-coded-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedin:boolean= false;

  constructor(public hardcodeauthentic : HardCodedServicesService) { }

  ngOnInit(): void {
    this.isLoggedin = this.hardcodeauthentic.isUserAuthenticated();
  }

}
