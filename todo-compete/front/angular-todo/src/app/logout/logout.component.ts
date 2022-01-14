import { Component, OnInit } from '@angular/core';
import { HardCodedServicesService } from '../service/hard-coded-services.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedService: HardCodedServicesService) { }

  ngOnInit(): void {
    this.hardcodedService.logout();
  }

}
